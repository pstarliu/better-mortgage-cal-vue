<template>
  <div>
    <h1>Doing the Calculate</h1>
    <b-form>

      <b-form-group id="bankSelectionGrp"
      label="Your Bank"
      label-for="bankSelection"
      description="Who provide your loan">
      <b-form-select id="bankSelection"
      v-model="bankSelection"
      :options="bankOptions" />
    </b-form-group>

    <b-form-group id="interestGrp"
                        label="Interest Rate:"
                        label-for="txbInterest">
            <b-form-input id="txbInterest"
                          type="percentage"
                          v-model="interest"
                          required
                          placeholder="0%">
            </b-form-input>
          </b-form-group>

    <b-form-group id="loanAmountGrp"
                    label="Total Loan Amount:"
                    label-for="txbloanAmount">
        <b-form-input id="txbLoanAmount"
                      type="money"
                      v-model="loanAmount"
                      required
                      placeholder="Loan Amount">
        </b-form-input>
      </b-form-group>

      <b-form-group id="loanTermGrp"
                    label="Loan Term:"
                    label-for="txbLoanTerm">
        <b-form-input id="txbLoanTerm"
                      type="Number"
                      v-model="loanTerm"
                      required
                      placeholder="The term for the loan">
        </b-form-input>
      </b-form-group>
  </b-form>
  </div>
</template>

<script>
export default{
    data() {
        return {
            bankOptions: [
                {text: 'ANZ', vaule: "ANZ"},
                {text:'Kiwi', value: "KIWI"},
                {text:'Westpac', value: "WESTPAC"}
            ],
            bankSelection: "",
            interest: 5,
            loanAmount: 500000,
            loanTerm: 30
        };
    },
    methods: {
    },
    created() {
    }
}
</script>
