import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

function buttonActive(buttonRole, stateRole) {
  const isActive = (stateRole === buttonRole) ? "active" : "";
  return `button tiny ${isActive}`;
}

export default class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //Only works on dashboard
    //window.foundationReload("#DashboardAccordion");
    window.foundationReload();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.role !== nextProps.role) {
      //Role has changed so much reinit Foundation accordions
      window.foundationReInitialize();
    }
  }

  renderAccordianItem(itemLabel, id, content) {
    return (
      <li className="accordion-item" id={id} aria-selected="false" aria-expanded="false" data-accordion-item>
        <a href="#" className="accordion-title"><h4>{itemLabel}</h4></a>
        <div className="accordion-content" data-tab-content>
          {content}
        </div>
      </li>
    );
  }

  render() {
    const onRoleChange = this.props.onRoleChange;
    const role = this.props.role;

    const roles =
      <div className="row DashboardButtons">
      </div>;
    return (
      <div className="dashboard callout">
        {roles}
        <div className="frontpage">
          <ul id="DashboardAccordion" className="accordion" data-accordion data-multi-expand="true" data-allow-all-closed="true">
          </ul>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
}
