import PropTypes from 'prop-types';
import { TransactionTable, TransactionItem,TransactionItemData,TransactionItemCaption} from './TransactionHistory.styled';
export const TransactionHistory = ({transactions}) => {
    return (<TransactionTable>
        <thead>
            <tr>
                <TransactionItemCaption>Type</TransactionItemCaption>
                <TransactionItemCaption>Amount</TransactionItemCaption>
                <TransactionItemCaption>Currency</TransactionItemCaption>
            </tr>
        </thead>
        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
            <TransactionItem key={id}>
                <TransactionItemData>{type}</TransactionItemData>
                <TransactionItemData>{amount}</TransactionItemData>
                <TransactionItemData>{currency}</TransactionItemData>
            </TransactionItem>))}
        </tbody>
    </TransactionTable>)
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}
