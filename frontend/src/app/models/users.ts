export class Users {
    _id: String;
    name: String;
    street: String;
    phone: String;
    email: String;
    user: String;
    pass: String;
    admin: Boolean;

    constructor(_id = '', name = '', street = '', phone= '', email = '', user = '', pass = '', admin = false){
    this._id = _id;
    this.name = name;
    this.street = street;
    this.phone = phone;
    this.phone = email;
    this.user = user;
    this.pass = pass;
    this.admin = admin;
    }
}