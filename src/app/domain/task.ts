export class Task {
    id: string
    userId: string
    title: string
    summary: string
    dueDate: string

    constructor(id: string, userId: string, title: string, summary: string, dueDate: string) {
        this.id = id
        this.userId = userId
        this.title = title
        this.summary = summary
        this.dueDate = dueDate
    }
}