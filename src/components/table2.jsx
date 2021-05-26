import React, { Component } from 'react';
import styles from './table.module.css'
class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            error: null,
            data:[] 
         }
    }
    componentDidMount(){
        console.log("hello");
        fetch("/api/v2/tickers")
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                data: result,
                isLoaded:true
            });
        })
        .catch((error) => {
            this.setState({
                isLoaded:true,
                error
            })
        });
    }

    render() { 
         const {error, isLoaded, data} = this.state;
        

        if (error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            const items = []
            let count = 1
            for (var key in data) {
                if(count<11){
                items.push(
                    <div className={styles.body}>
                <div key={key} className={styles.child}>{count}</div>
                <div key={key} className={styles.child}>{data[key].name}</div>
                <div key={key} className={styles.child}>{data[key].last}</div>
                <div key={key} className={styles.child}>{data[key].buy}/{data[key].sell}</div>
                <div key={key} className={styles.child}>{data[key].volume}</div>
                <div key={key} className={styles.child}>{data[key].base_unit}</div>
                </div>
                )
            }else{
                break;
            }
            count++;
            }
            return(
                <div>
                    <div className={styles.head}>
                        <div className={styles.headchild}>#</div>
                        <div className={styles.headchild}>name</div>
                        <div className={styles.headchild}>last</div>
                        <div className={styles.headchild}>buy/sell price</div>
                        <div className={styles.headchild}>volume</div>
                        <div className={styles.headchild}>base_unit</div>
                    </div>
                    {items}
                </div>
                
            )
        }
    }
}
 
export default Table2;