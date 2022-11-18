import {  View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const expensesOutput = ({expenses,expensesPeriod }) => {
  return (
    <View>
     <ExpensesSummary 
        expenses ={expenses}
        periodName ={expensesPeriod}  />
     <ExpensesList />
    </View>
  ); 
}

export default expensesOutput;