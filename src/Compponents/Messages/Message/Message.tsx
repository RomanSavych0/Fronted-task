import React from 'react'

interface IProps{
message:string
location: string
}
const Message:React.FC<IProps>=(props)=>{
return <div>
{ props.message }
<span>
{props.location}
</span>
</div>

}
export default  Message
