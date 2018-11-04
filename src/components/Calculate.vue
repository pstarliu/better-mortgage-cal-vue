<template>
<div>
  <h1>Doing the Calculate</h1>
  
  <b-form>
    
    <b-form-group id="bankSelectionGrp" 
		  label="Your Bank"
		  label-for="bankSelection"
		  description="Who provide your loan">
      <b-form-select id="bankSelection" v-model="bankSelection" :options="bankOptions" />
    </b-form-group>
    
    <b-form-group id="interestGrp"
		  label="Interest Rate:"
		  label-for="txbInterest">
      <b-form-input id="txbInterest"
		    type="number"
		    v-model="interest"
		    min="0.01"
		    max="99.99"
		    step="0.01"
		    required
		    placeholder="0.00%">
      </b-form-input>
    </b-form-group>
    
    <b-form-group id="loanAmountGrp"
		  label="Total Loan Amount:"
		  label-for="txbloanAmount">
      <b-form-input id="txbLoanAmount"
      		    v-model="loanAmountComput"
      		    required
      		    placeholder="Loan Amount">
      </b-form-input>
    </b-form-group>
    
    <b-form-group id="loanTermGrp"
		  label="Loan Term:"
		  label-for="txbLoanTerm">
      <b-form-input id="txbLoanTerm"
		    type="number"
		    v-model.number="loanTerm"
		    required
		    placeholder="The term for the loan">
      </b-form-input>
    </b-form-group>
    <b-button  variant="primary" @click="calculatePayment">Submit</b-button>
    <!-- <b-button type="reset" @click="re variant="danger">Reset</b-button> -->
  </b-form>
  
  <!-- Consider conver it into a card in the future -->
  <div id="divRepayment" v-if="calculated">

    <b-form-group id="repayFnGrp"
		  horizontal
		  label="Payment Fortnighly:">
      {{ repayFn | toCurrency}}
    </b-form-group>
    <b-form-group id="repayMtGrp"
		  horizontal
		  label="Payment Monthly:">
      {{ repayMt | toCurrency}}
    </b-form-group>
    <b-form-group id="repayInterestGrp"
		  horizontal
		  label="Total Interest Paid:">
      {{ interestPaid | toCurrency }}
    </b-form-group>

  </div>
</div>

</template>

<script>
export default{
    data() {
        return {
	    calculated: false,
            bankOptions: [
                {text: 'ANZ', vaule: "ANZ"},
                {text:'Kiwi', value: "KIWI"},
                {text:'Westpac', value: "WESTPAC"}
            ],
            bankSelection: "",
            interest: 5.50,
            loanAmount: 500000,
            loanTerm: 30,
	    repayFn: 0,
	    repayMt: 0,
	    interestPaid: 0
        };
    },
    methods: {
	calculatePayment() {
	    // Repayment formular
	    // https://en.wikipedia.org/wiki/Mortgage_calculator
	    const monthlyInterest = this.interest/(12*100);
	    const fortnigntlyInterest = this.interest/(26*100)

	    this.repayMt = this.payment(monthlyInterest, this.loanTerm * 12, this.loanAmount);

	    this.repayFn = this.payment(fortnigntlyInterest, this.loanTerm * 26, this.loanAmount);
	    this.interestPaid = this.repayMt * this.loanTerm * 12 - this.loanAmount;
	    
	    this.calculated = true;
	},
	
	payment(rate, n, principal) {
	    return rate * Math.pow(1 + rate, n)*principal / (Math.pow(1 + rate, n) - 1);
	}

    },
    computed: {
	loanAmountComput: {
	    // getter
	    get: function() {
		return this.$options.filters.toCurrency(this.loanAmount);
	    },
	    // setter
	    set: function(newValue) {
		//console.log(newValue.replace(/[,$]/g, ''));
		this.loanAmount = Number(newValue.replace(/[,$]/g, ''));
	    }
	}
    },
    created() {
    }
}
</script>
