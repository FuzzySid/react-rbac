import roles from "./roles";

const rolesConfig= {
     [roles.Employee]: {
        routes: [
          {
            component: 'Employee', 
            url: '/employee'
          },
        ],
      },
     [roles.Manager]: {
        routes: [
          {
            component: 'Manager', 
            url: '/manager'
          },
          {
            component: 'Employee', 
            url: '/employee'
          },
        ],
      },
     [roles.Admin]: {
        routes: [
          {
            component: 'Admin', 
            url: '/admin'
          },
          {
            component: 'Manager', 
            url: '/manager'
          },
          {
            component: 'Employee', 
            url: '/employee'
          },
        ],
      },
    }

export default rolesConfig;