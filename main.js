const teachers = [
    {name: 'Marieke',
    email: 'm.devries@novi.nl'
    },
    {name: 'Hannah',
        email: 'h.wilda@novi.nl'
    },
    {name: 'Robin',
        email: 'r.abhuizen@novi.nl'
    },
    {name: 'Robert',
        email: 'r.janssen@novi.nl'
    },
    {name: 'Said',
        email: 's.harachi@novi.nl'
    }
]

const searchName = 'ROBE';

function searchEmailAddress (employees, nameOfEmployee) {

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase() === nameOfEmployee.toLowerCase()
            || employees[i].name.toLowerCase().includes(nameOfEmployee.toLowerCase())) {
            return employees[i].email;
        } else {
            console.log("Nope....");
        }
    }
}

const emailAddress = searchEmailAddress(teachers, searchName);
console.log(emailAddress);