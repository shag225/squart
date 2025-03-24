export interface Session {
    sessionId: string;
    action: string;
    date?: string;
    time?: string;
    month?: string
}

export interface SessionsTable {
    date: string;
    time: string;
    action: string;
}