import PropTypes from 'prop-types';
import { StatisticSection, Title, StatisticList, StatisticItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, statistics }) => { 
    return (<StatisticSection>
        {title && (<Title>{title}</Title>)}

        <StatisticList>
            {statistics.map(({id, label, percentage})=>( 
                <StatisticItem percentage={percentage} key={id}> {/* тут додатково передаю проценти для формування кольору */}
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
            </StatisticItem>
            ))}
           
        </StatisticList>
    </StatisticSection>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage :PropTypes.number.isRequired,
    }))
}