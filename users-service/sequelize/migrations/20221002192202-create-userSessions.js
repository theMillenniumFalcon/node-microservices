export const up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        "userSessions",
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID
            },
            userId: {
                allowNull: false,
                references: {
                    key: "id",
                    model: "users"
                },
                type: DataTypes.UUID
            },
            expiresAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        },
        {
            charset: "utf8"
        }
    )
}

export const down = (queryInterface) => { return queryInterface.dropTable("userSessions") }