import FormValues from "./page"
export type Permit = {
    id: number
    createdAt: string
    updatedAt: string
    name: string
    displayName: string
    displayDescription: string
    requirements: JSON
}

export const mockPermitsDB: Permit[] = [
    {
        id: 2,
        createdAt: "2024-05 - 28T16:07: 46.358Z",
        updatedAt: "2024-05 - 28T16:07: 46.358Z",
        name: "Over-the-Counter Submission Process",
        displayName: "✅ Over-the-Counter Submission Process",
        displayDescription: "* A building permit is required. * Include plan sets. * Submit application for in-house review.",
        requirements: JSON.parse(JSON.stringify(`{
            "exterior": {
            "Other": false,
            "Fencing": false,
            "Exterior doors": true,
            "Garage door replacement": true
        },
            "interior": {
            "Other": "false",
            "New bathroom": "false",
            "Bathroom remodel": "true",
            "New laundry room": "false"
        }
        }`))
    },
    {
        id: 3,
        createdAt: "2024-05 - 28T16:07: 46.358Z",
        updatedAt: "2024-05 - 28T16:07: 46.358Z",
        name: "In-House Submission Process",
        displayName: "✅ In-House Review Process",
        displayDescription: "* A building permit is required. * Submit application for OTC review.",
        requirements: JSON.parse(JSON.stringify(`{
            "exterior": {
                "Other": true,
                "Fencing": false,
                "Exterior doors": false,
                "Garage door replacement": false
            },
            "interior": {
                "Other": true,
                "New bathroom": true,
                "Bathroom remodel": false,
                "New laundry room": true
            }
        }`))
    },
    {
        id: 4,
        createdAt: "2024-05 - 28T16:07: 46.358Z",
        updatedAt: "2024-05 - 28T16:07: 46.358Z",
        name: "No Permit",
        displayName: "❌ No Permit",
        displayDescription: "Nothing is required! You’re set to build",
        requirements: JSON.parse(JSON.stringify(`{
            "exterior": {
            "Other": false,
            "Fencing": true,
            "Exterior doors": false,
            "Garage door replacement": false
        },
            "interior": {
            "Other": "false",
            "New bathroom": "false",
            "Bathroom remodel": "false",
            "New laundry room": "false"
        }
        }`))
    },
]