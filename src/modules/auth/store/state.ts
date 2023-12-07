export interface AuthState {
    status: string;
    user: User | null;
    idToken: string | null;
    refreshToken: string | null;
}

interface User {
    address?:  Address;
    id:       number;
    email:    string;
    username: string;
    name:     Name;
    phone?:    string;
}

interface Address {
    geolocation: Geolocation;
    city:        string;
    street:      string;
    number:      number;
    zipcode:     string;
}

interface Geolocation {
    lat:  string;
    long: string;
}

interface Name {
    firstname: string;
    lastname:  string;
}


const state = (): AuthState => {
    return {
        status: "authenticating", // 'authenticated', 'not-authenticated', 'authenticating'
        user: {
            id: 1,
            name: {
                firstname: 'Gabriel',
                lastname: 'Castillo'
            },
            email: 'gapacanu@gmail.com',
            username: 'gapacanu',
        },
        idToken: null,
        refreshToken: null,
    };
};

export default state;
