import { User } from "../types/types";

const URL_BASE = "http://localhost:8080/api/user";

/**
 * @returns all users in db
 */
export const getAllUsers = async () => {
    try {
        const response = await fetch(URL_BASE + "/get-all", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });

        if(response.ok) {
            console.log("All users retieved!");
            return await response.json();
        }
        
        console.error("Internal server error (GETALL) " + response.status);
    } catch (err) {
        console.error("Error in getAllUsers (USER API)");
    }
}

/**
 * @param userid 
 * @returns user if in db, if else null
 */
export const getUser = async (userid: number) => {
    try {
        const response = await fetch(URL_BASE + `/get/${userid}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });

        if(response.ok) {
            return await response.json();
        }

        console.error("Internal server error (GETUSER) " + response.status);
        return null;
    } catch (err) {
        console.error("Error in getUser (USER API)");
    }
}

/**
 * @param username 
 * @param password 
 * @returns 
 */
export const createUser = async (username: string, password: string) => {
    try {
        const user: User = {
            userid: 0,
            username: username,
            password: password
        }

        const response = await fetch(URL_BASE + "/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        });

        if(response.ok) {
            return await response.text();
        }

        if(response.status === 409) {
            console.log("Username exists");
            return "USERNAME_EXISTS";
        }
        
        console.error("Internal server error (CREATEUSER)");
        return null;
    } catch(err) {
        console.error("Error in createUser (USER API)");
        return null;
    }
}

export const deleteUser = async (userid: number) => {
    try {

    } catch (err) {
        console.error("");
    }
}

