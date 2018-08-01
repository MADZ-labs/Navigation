import React from 'react';
import styled, { css } from 'styled-components';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  hideComponents(e) {
    var objHost = {
      campaign: 'http://localhost:3002/bundle.js',
      updates: 'http://localhost:3004/bundle.js',
      comment: 'http://localhost:3003/bundle.js',
    }

    var arr = ['campaign', 'updates', 'comment', 'faq', 'community'];
    arr.splice(arr.indexOf(e.target.id.slice(3, e.target.id.length).toLowerCase()), 1);

    if(document.getElementById('dynaScript')){
      document.getElementById('dynaScript').remove();
    }

    var divs = document.getElementById('parent').getElementsByTagName('*');
    for(var i = 0; i < divs.length; i++) {
      if(arr.includes(divs[i].id)) {
        divs[i].remove();
      }
    }
    
    const div = document.createElement('div');
    div.id = e.target.id.slice(3, e.target.id.length).toLowerCase();
    document.getElementById('parent').appendChild(div);

    const script = document.createElement('script');
    script.setAttribute('src', objHost[div.id]);
    script.setAttribute('id', 'dynaScript');
    document.body.appendChild(script);
  }

  render() {
    return (
      <Div navigation>
        <Button btnCampaign id="btnCampaign" onClick={this.hideComponents}>
          Campaign
        </Button>
        <Button btnFAQ id="btnFAQ" onClick={this.hideComponents}>
          FAQ<Sup>{Math.floor(Math.random() * (10 - 2)) + 2}</Sup>
        </Button>
        <Button btnUpdates id="btnUpdates" onClick={this.hideComponents}>
          Updates<Sup>{Math.floor(Math.random() * (10 - 2)) + 2}</Sup>
        </Button>
        <Button btnComment id="btnComment" onClick={this.hideComponents}>
          Comments<Sup>{Math.floor(Math.random() * (200 - 2)) + 2}</Sup>
        </Button>
        <Button btnCommunity id="btnCommunity" onClick={this.hideComponents}>
          Community
        </Button>
      </Div>
    )
  }
}

const Div = styled.div`
  ${props => props.navigation && css`
    margin: 15px 0;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    text-align: center;
  `}
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 30px;
  font: 100% "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  &:hover {
    color: limegreen;
  }
`;

const Sup = styled.sup`
  color: limegreen;
`;


module.exports = App;