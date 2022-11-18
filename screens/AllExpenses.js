import { StyleSheet} from "react-native"
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";


const AllExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod="Totals" />
  )
}

export default AllExpenses;

const styles = StyleSheet.create({});