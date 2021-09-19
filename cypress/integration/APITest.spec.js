describe("Users API", () => {
    it("should see a list of users", () => {
        cy.visit("http://localhost:8080/");
        cy.server();
        cy.route({
            url: "/api/users/",
            method: "GET",
            response: [
                {
                    name: "Juliana",
                    surname: "Crain"
                },
                { name: "Molly", surname: "F." }
            ]
        });
        cy.contains("FETCH").click();
    });
});