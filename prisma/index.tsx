import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    // const allPermits = await prisma.permit.findMany()
    // console.log(allPermits)

    /*
    await prisma.permit.createMany({
        data: [{
            name: 'Over-the-Counter Submission Process',
            requirements: {
                "interior": {
                    "Bathroom remodel": "true",
                    "New bathroom": "false",
                    "New laundry room": "false",
                    "Other": "false"
                },
                "exterior": {
                    "Garage door replacement": "true",
                    "Exterior doors": "true",
                    "Fencing": "false",
                    "Other": "false"
                }
            }
        },
        {
            name: 'In-House Submission Process',
            requirements: {
                "interior": {
                    "Bathroom remodel": "false",
                    "New bathroom": "true",
                    "New laundry room": "true",
                    "Other": "true",
                },
                "exterior": {
                    "Garage door replacement": "false",
                    "Exterior doors": "false",
                    "Fencing": "false",
                    "Other": "true",
                },
            }
        }]
        skipDuplicates: true,
    })
    */

    const getPermits = await prisma.permit.findMany({
    })
    console.dir(getPermits, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })