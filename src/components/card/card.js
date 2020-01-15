import React from 'react';
import './card.css'
const Card = props => (
  <div className="row">
    { props?(props.issues.map((issue) => {
      return (
        <div key={issue.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="card__box">
            <div className="card-header row">
            <img 
              className="card__box-img" 
              src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png" 
              alt={issue.title}/>
            <div className="card-header-title">  
                <h4>{issue.title}</h4>
                <span className="card-price">Created By {issue.user.login}</span>  
            </div>
            </div>  
                <p className="card-desc">{issue.body}</p>
              <button className="button-excel">
              <a style={{ color: "inherit",textDecoration:"none"}}href={issue.html_url}>Take me to the repo</a>
              </button>
          </div>
        </div>
      );
    })):<h1>ERROR</h1>}
    </div>
);

export default Card;