import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @Column({name: "Id"})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "First_Name"})
    firstName: string;

    @Column({name: "Last_Name"})
    lastName: string;

}
