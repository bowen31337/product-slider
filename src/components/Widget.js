import React, {Component} from 'react'
import Link from 'react-router/lib/Link'

const assetsPath = '/images/'

class Widget extends Component{
  componentWillMount(){
    this.props.fetchContents()
  }

  toggleBox(flag){
    return this.props.toggleBox(flag)
  }

  goToPage(page){
    return this.props.goToPage(page)
  }


  renderHeader = (title,flag) => (
  	<h1 className='title'><i className="fa fa-file"></i> {title} <span className="toggle" onClick={()=>this.toggleBox(flag)}>{flag && <i className="fa fa-caret-up" ></i>}{flag || <i className="fa fa-caret-down" ></i>}</span></h1>
  )

  renderThumnail = item => (
  	(item.thumbnail && item.thumbnail!=='') && <img src={assetsPath+item.thumbnail}  role='presentation' className='thumbnail'/>
  ) 

  renderPager = (items,page) => {
  		if(page === 0){
	  		return (
	  			<div className="pager">
	  				<span className="next" onClick={()=>this.goToPage(page+1)}>
	  					<span className="next-title">{items[page+1].title}</span>
		  				<i className="fa fa-caret-right" ></i>
		  			</span>
		  		</div>
	  			)
  		} 
  		if(page === items.length - 1){
  			return (
  				<div className="pager">
  				<span className="prev" onClick={()=>this.goToPage(page-1)}>
	  				<i className="fa fa-caret-left" ></i>
  					<span className="prev-title">{items[page-1].title}</span>
	  			</span>
	  			</div>
  			)
  		}

  		return (
					<div className="pager">	
		  			<span className="prev" onClick={()=>this.goToPage(page-1)}>
		  				<i className="fa fa-caret-left" ></i>
	  					<span className="prev-title">{items[page-1].title}</span>
		  			</span>
		  			<span className="next" onClick={()=>this.goToPage(page+1)}>
	  					<span className="next-title">{items[page+1].title}</span>
		  				<i className="fa fa-caret-right" ></i>
		  			</span>
		  		</div>

  			)
  }


  renderDescription = item => (
  	(item.description && item.description !== '') && <p>{unescape(item.description)}</p>
  ) 

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
    }
  }


  renderItem(items,page,flag,title) {
    return  items
				    .filter((item,itemIndex) => page === itemIndex)
						.map((item,itemIndex) => (
			            <div className="item-wrapper" key={itemIndex}>
			               {this.renderHeader(title,flag)}

			            	{flag && 
			            		<div className="desc">
				            	{this.renderThumnail(item)}
			            		{this.renderDescription(item)}
				            	</div>}
			            	{flag && this.renderPager(items,page)}
			            </div>
			          )
            )
				          
  }

  render(){
    const {items,flag, loading, error,page,title} = this.props
    console.log(this.props)

    if(loading) {
      return <div className="venues-loading"><i className="fa fa-spin fa-spinner"></i></div>
    } else if(error){
      return <div className="alert alert-danger">Error: {error}</div>
    }
    return (
      <div className="item-list">
       {this.renderItem(items,page,flag,title)}
      </div>
    )
  }

}


export default Widget
