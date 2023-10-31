import { FeedBackList, FeedBackItem, FeedBackButton } from "./FeedbackOptions.styled"

const FeedBackOptions = ({handleFeedback, keys}) => {
return (

    <FeedBackList>
        {keys.map(key => (
            <FeedBackItem key={key}>
    <FeedBackButton tag={key} onClick={() =>handleFeedback(key)}
    >{key}</FeedBackButton>
</FeedBackItem>
        ))}

</FeedBackList> 
)
}

export default FeedBackOptions