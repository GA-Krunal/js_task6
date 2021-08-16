var arr = [
    {
        title: 'Overview',
        routeLink: '/dashboard',
        iconClass: 'vs-over-ico',
        permissions: [1, 2, 3],
        active: true,
        sequence: 1
    },
    {
        title: 'Brands',
        routeLink: '/brands',
        iconClass: 'vs-brand-ico',
        permissions: [1],
        active: false,
        sequence: 2
    },
    {
        title: 'Bloggers',
        routeLink: '/bloggers',
        iconClass: 'vs-blog-ico',
        permissions: [1, 2],
        active: false,
        sequence: 3
    },
    {
        title: 'Create Campaign',
        routeLink: '/campaign-form',
        iconClass: 'vs-camp-ico',
        permissions: [2],
        active: true,
        sequence: 4
    },
    {
        title: 'Brief Note',
        routeLink: '/brief-note',
        iconClass: 'vs-note-ico',
        permissions: [2, 3],
        active: false,
        sequence: 5
    },
    {
        title: 'Add ons',
        routeLink: '/add-ons',
        iconClass: 'vs-addon-ico',
        permissions: [2],
        active: false,
        sequence: 6
    },
    {
        title: 'Payment',
        routeLink: '/payment',
        iconClass: 'vs-payment-ico',
        permissions: [1],
        active: true,
        sequence: 7
    },
    {
        title: 'Reports & Statistics',
        routeLink: '/reports',
        iconClass: 'vs-report-ico',
        permissions: [1],
        active: false,
        sequence: 8
    },
    {
        title: 'Settings',
        routeLink: '/settings',
        iconClass: 'vs-setting-ico',
        permissions: [1],
        active: false,
        sequence: 9
    },
    {
        title: 'Profile',
        routeLink: '/profile',
        iconClass: 'vs-setting-ico',
        permissions: [2, 3],
        active: true,
        sequence: 10
    }
]
// ************task 1******************************************
/*

function myFunc1(items) {
    
opArray = new Array();

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    
    for (const key in element) {
        if (Object.hasOwnProperty.call(element, key)) {

            if (key === "active" && element[key] === true) {
                opArray.push(element);
            }
        }
    }
}
  return opArray;
}
console.log(myFunc1(arr));

*/

// ************task 2***********************************

/*

function myFunc2(items , permission) {
    
    op2Array = new Array();
    
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                if (key === "permissions") {
                    let temp = element[key];

                    for (let j = 0; j < temp.length; j++) {
                        if (temp[j] === permission) {
                            op2Array.push(element);
                        }
                        
                    }
                }
            }
        }
    }
      return op2Array;
    }
    console.log(myFunc2(arr,3));

*/

// ************task 3***************************************

/*
function myFunc3(items , title , outputKey) {

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
    
                if (element[key] === title) {
                    console.log(element[outputKey]);
                }
            }
        }
    }
    
}
myFunc3(arr , 'Profile', 'routeLink');

*/