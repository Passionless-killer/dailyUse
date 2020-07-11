import React from 'react';
class Jishu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            num:null,
            num1:undefined,
            num2:false,
            book:[
                {name:'红楼梦',
                author:"曹雪芹",
                num:1},
                {name:'西游记',
                author:"吴承恩",
                num:2},
                {name:'三国演义',
                author:"施耐庵",
                num:2}
        ]
        }
        this.props=props
    }
    componentDidMount(){console.log(this.props)}
    add(index){
        const book=[...this.state.book]
        book.map((e,num)=>{
            if(num===index)++e.num
            return e.num})
        this.setState({
            book:book
        })
    }
    mul(index){
        const book=[...this.state.book]
        book.map((e,num)=>{
            if(num===index)  --e.num
            return e.num})
        this.setState({
            book:book
        })
        console.log(book)
    }
    render(){
        return(
            <div>{this.props.title}
            <ul>
               {
                    this.state.book.map((e,index)=>{
                        return (
                             <li key={index}>
                                 <span>{e.name}</span>
                                 <span>{e.author}</span>
                                 <span onClick={(e)=>this.mul(index)}>-</span>
                                 <span>{e.num}</span>
                                 <span onClick={(e)=>this.add(index)}>+</span>
                                 
                                 <span  onClick={()=>this.remove(index)}>移除</span>
                                 </li>
                                )
                            }
                        )
             
                } 
                </ul>
            </div>
        )
    }
    remove(index){
        console.log(1)
        this.setState({
            book:this.state.book.filter((item, indey) => index !== indey)
        })
        console.log(this.state.book,index)
    }
}
export default Jishu;