Feature('Prueba de GET de API Pokemon')

Scenario('Test of backend REST GET', async ({ I }) => {
    const response = await I.sendGetRequest('https://pokeapi.co/api/v2/pokemon/ditto')

    // Validamos el codigo de respuesta correcto
    I.assertEqual(response?.status, 200)

    // Validamos el nombre del pokemon
    I.assertEqual(response?.data?.name, 'ditto')

    // Validamos la habilidad del pokemon Ditto
    I.assertEqual(response?.data?.abilities?.[0]?.ability?.name, 'limber')

    // Validamos el peso del pokemon Ditto
    I.assertEqual(response?.data?.base_experience, 101)

    // Validamos la altura del pokemon Ditto
    I.assertEqual(response?.data?.height, 3)

    // Validamos el peso del pokemon Ditto
    I.assertEqual(response?.data?.weight, 40)

    // Validamos el tipo del pokemon Ditto
    I.assertEqual(response?.data?.types?.[0]?.type?.name, 'normal')
})

Scenario('Test of GRAFQL GET', async ({ I }) => {
    const response = await I.sendQuery(`
    {
        pokemon(name: "ditto") {
            id
            name
            abilities {
                ability {
                    name
                }
            }
            base_experience
            height
            weight
            types {
                type {
                    name
                }
            }
        }
    }`)

    // Validamos el codigo de respuesta correcto
    I.assertEqual(response?.status, 200)

    // Validamos el nombre del pokemon
    I.assertEqual(response?.data?.data?.pokemon?.name, 'ditto')

    // Validamos la habilidad del pokemon Ditto
    I.assertEqual(response?.data?.data?.pokemon?.abilities?.[0]?.ability?.name, 'limber')

    // Validamos el peso del pokemon Ditto
    I.assertEqual(response?.data?.data?.pokemon?.base_experience, 101)

    // Validamos la altura del pokemon Ditto
    I.assertEqual(response?.data?.data?.pokemon?.height, 3)

    // Validamos el peso del pokemon Ditto
    I.assertEqual(response?.data?.data?.pokemon?.weight, 40)

    // Validamos el tipo del pokemon Ditto
    I.assertEqual(response?.data?.data?.pokemon?.types?.[0]?.type?.name, 'normal')
})