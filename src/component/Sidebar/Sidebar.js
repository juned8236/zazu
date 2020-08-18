import React    from "react";
import template from "./Sidebar.jsx";

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Dates',
          Url: '/date',
          id: 1
        },
        {
          title: 'Partners',
          Url: '/partner',
          id: 2
        },

        {
          title: 'Users',
          Url: '/user',
          id: 3
        },

        {
          title: 'Statistics',
          Url: '/stat',
          id: 4
        },

      ]
    };
  }
  render() {
    return template.call(this);
  }
}

export default Sidebar;
