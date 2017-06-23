import React,{Component} from 'react';


class Experience extends Component{


	render(){
       var detailsNodes = this.props.item.details.map(function (detail) {
          return (
             <li>{ detail }</li>
             )
      })


		return(
                 <div className="item">
	                    <div className="meta">
	                        <div className="upper-row">
	                            <h3 className="job-title">{this.props.item.title}</h3>
	                            <div className="time">{this.props.item.period}</div>
	                        </div>
	                        <div className="company"><a href={this.props.item.companyURL}>{this.props.item.company}</a></div>
	                    </div>
	                    <div className="details">
	                    	<ul>
	                    		{ detailsNodes }
	                    	</ul>
	                  </div>
	                  </div>

				);
		}

	}
export default Experience;