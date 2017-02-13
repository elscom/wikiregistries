// User Model
export class User {
constructor(
    public id: number,
    public firstname: string,
    public surname: string,
    public phone: string,
    public email: string,
    public userlanguage: number,
    public password: string,
    public pin: number,
    public locationid: number,
    public groupid: number,
    public createdby: number,
    public createdon: string,
    public modifiedby: number,
    public modifiedon: string,
    public del: boolean) {}
}