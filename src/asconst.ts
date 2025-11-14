// as const assertion ====> Don't re asignment value just read only value

// enum UserRole {
//     Admin='Admin',
//     Editor='Editor',
//     Viewer='Viewer'
// }
const UserRole ={
      Admin:'Admin',
    Editor:'Editor',
    Viewer:'Viewer'
} as const; //Read only and constant

/* readOnly Admin:'Admin',
  readOnly  Editor:'Editor',
  readOnly  Viewer:'Viewer'
#obj to emun ====>

1. typeof operator>
typeof UserRole--
{
Admin:"Admin",
Editor:"Editor",
Viewer:"Viewer"
}

2. keyof operator>
keyof UserRole--
"Admin"|"Editor"|"Viewer"

*/ 

const canEdit =(role: keyof typeof UserRole)=>{
    if(role===UserRole.Admin|| role===UserRole.Editor){
        return true
    }else return false
}
const res=canEdit(UserRole.Admin)
console.log(res)