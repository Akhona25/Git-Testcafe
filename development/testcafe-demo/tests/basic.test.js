import {Selector} from 'testcafe'
import { ClientFunction } from 'testcafe'

const getWindowLocation = ClientFunction(() => window.location)

fixture('Getting started with TextCafe')
    .page('https://devexpress.github.io/testcafe/example/')
    .before(async t => {
        //Test setup goes here
        // await runDatabaseReset()
    })
    .beforeEach(async t=>{
        //Runs before each test
    })
    .after(async t=>{
        //Cleaning test data 
        //Runs after all tests within a fixture 
    })
    .afterEach(async t=>{
        // Runs after each test 
    })

    test
    .skip
    ('My first testcafe test', async t =>{
        //here codes testcafe code
        const developer_name_input = Selector('#developer-name')
        const submit_button = Selector('#submit-button')
        const articleText = Selector('#article-header').innerText

        await t.setTestSpeed(1)
        await t.typeText(developer_name_input, 'Akhona')
        await t.click(submit_button )
        await t.expect(articleText).contains('Akhona')

    })

    
    test
    .skip
    ('The .count selector', async t=>{
        const osCount = Selector('.column.col-2 label').count
        await t.expect(osCount).eql(3)
    })

    test('My Clientfunction test', async t=>{
        const location = await getWindowLocation()
    })

