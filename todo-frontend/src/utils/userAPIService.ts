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
        
        return response.status
    } catch (err) {
        console.error("Error in getAllUsers (USER API)");
        return "SERVER_ERROR";
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

        return response.status;
    } catch (err) {
        console.error("Error in getUser (USER API)");
    }
}

/**
 * @param username 
 * @param password 
 * @returns USERNAME_EXISTS if username is present, null if server error or user object if created.
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
            return await response.json();
        }

        if(response.status === 409) {
            console.log("Username exists");
            return "USERNAME_EXISTS";
        }
        
        return response.status;
    } catch(err) {
        console.error("Error in createUser (USER API)");
        return null;
    }
}

/**
 * @param userid 
 * @returns Deleted user, null if user not in db, NOT_FOUND if user not in db
 */
export const deleteUser = async (userid: number) => {
    try {
        const response = await fetch(URL_BASE + `/delete/${userid}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userid)
        })

        if(response.ok) {
            return await response.json();
        }

        if(response.status === 404) {
            console.log("Username exists");
            return "NOT_FOUND";
        }

        return response.status;
    } catch (err) {
        console.error("Error in deleteUser (USER API)");
        return null;
    }
}

