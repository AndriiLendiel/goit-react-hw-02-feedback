import { StatisticsList, StatisticsItem } from "./Statistics.styled";


export const Statistics =({value, countPositiveFeedbackPercentage, countTotalFeedback}) => {
    return (
<StatisticsList>
{Object.entries(value).map(el => 
    <StatisticsItem key={el[0]}>{el[0]}: {el[1]}</StatisticsItem>
)}

<StatisticsItem>Total: {countTotalFeedback}</StatisticsItem>
<StatisticsItem>Positive feedback: {countPositiveFeedbackPercentage} %</StatisticsItem>
</StatisticsList>
    )
}

