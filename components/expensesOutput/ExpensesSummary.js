
import { StyleSheet, Text, View } from 'react-native';
import {GlobalStyles} from '../../constants/styles';
const ExpensesSummary = ({expenses, periodName}) => {

    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style ={styles.container}>
    <Text style ={styles.perion}> {periodName}</Text>
    <Text style ={styles.sum}> {expensesSum.toFixed(2)} birr</Text>
  </View> 
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor:GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  perion :{
    fontSize: 12,
    color:GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color:GlobalStyles.colors.primary500,
  }
});