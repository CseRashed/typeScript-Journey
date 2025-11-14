// enum =========> like a set of obj  but senior developer not to recommended this enum for use


// type UserRole='Admin'|'Editor'|'Viewer'
enum UserRole {
    Admin='Admin',
    Editor='Editor',
    Viewer='Viewer'
}
const canEdit =(role:UserRole)=>{
    if(role===UserRole.Admin|| role===UserRole.Editor){
        return true
    }else return false
}
const res=canEdit(UserRole.Admin)
console.log(res)