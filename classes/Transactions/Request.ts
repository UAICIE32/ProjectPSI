import { Entity } from "../Entity";

export class Request {
    private id: string;
    public requestor: Entity
    public receiver: Entity
}