import { useState, useEffect } from "react";

const App = ({name}) => {
    let [data, setData] = useState()
    let [searchKeyword, setSearchKeyword] = useState();

    const loadData = () => {
        // API Integration
        setData([
            {
                name: "Test User",
                email: "test@user.com",
                address: "Kathmandu",
                phone: 1234567890
            },
            {
                name: "Test User 2",
                email: "test2@user.com",
                address: "Kathmandu",
                phone: 9876543210
            }
        ])
        console.log(data);  // []
    }

    useEffect(() => {
        // codbe execute
    }, [searchKeyword])

    // loadData()
    useEffect(() => {
        loadData()
    }, [])
    return (<>
        {name}
        <table border={1} cellSpacing={0} width={"100%"}>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    data ? <>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))
                    }
                    
                    </> : <><tr>
                    <td colSpan={5}>Loading....</td>
                </tr></>
                }
            </tbody>
        </table>
    </>)
}

export default App;