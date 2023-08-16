<script>

    let step = 0;

    const ATTRS = [
        "Brand/Trust",
        "Reliability",
        "Scalability",
        "Cost",
        "References/Ind. Experience​",
        "Speed/Ease of Deployment​",
        "Ease of Use​",
        "Comprehensiveness​",
        "Robustness​",
        "Certifications​",
        "Longevity​"
    ];
    const attributesData = ATTRS.map(a=>{
        return {
            attrName: a,
            data: [],
        }
    });

    const ATTRS2 = [
        "Technology Strength (e.g., IP)",
        "Economics of Scale​",
        "Cost Advantage (Low-cost Locations)​",
        "Brand/Customer Ref​",
        "Stickiness(Network Effect, Migration cost)​"
    ];
    const attributeData2 = ATTRS2.map(a=>{
        return {
            attrName: a,
            data: [],
        }
    });


    const ATTRS3 = [
        "Positioning",
        "Pricing"
    ];
    const attributeData3 = ATTRS3.map(a=>{
        return {
            attrName: a,
            data: [],
        }
    });
    

    let comapnies = [];
    function addCompany() {

        const count = comapnies.length;

        comapnies.push({
            name: count === 0 ? "You": `Company ${count}`,
            country: "",
            revenue: 0,
            funding: 0,
            customers: 0,
            incubated: ""
        });
        comapnies = comapnies;
        console.log(comapnies);
    }

    addCompany();
    addCompany();


    let industries = [];
    function addIndustry() {
        industries.push({
            large: "",
            medium: "",
            small: "",
        });
        industries = industries;
        console.log(industries);
    }
    addIndustry();


    let tests = [];
    function addRow_5() {

        tests.push({
            conditions: "",
            tests_to_be_cunducted: "",
            test_result: "",
            remarks: "",
        });
        tests = tests;
        console.log(tests);
    }
    addRow_5();


    let tests2 = [];
    function addRow_6() {
        tests2.push({
            whattests_to_do: "",
            results: "",
            pass_fail: "",
            remarks: "",
        });
        tests2 = tests2;
        console.log(tests2);
    }
    addRow_6();


    let tests3 = [];
    function addRow_7() {
        tests3.push({
            whattests_to_do: "",
            results: "",
            pass_fail: "",
            remarks: "",
        });
        tests3 = tests3;
        console.log(tests3);
    }
    addRow_7();

</script>


<!-- GOAL SETINGS -->
<section class="hidden" class:active={step === 0}>
    <h2>GOAL SETTING</h2>
    <table border="1">
        <thead>
            <tr>
                <td>GOAL</td>
                <td>CURRENT</td>
                <td>1 YEAR</td>
                <td>3 YEAR</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Revenue</td>
                <td><input type="number"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
            </tr>
            <tr>
                <td>Number of Customers</td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Number of Users</td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>EBIT</td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Revenue per Customers</td>
                <td><input type="number"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
            </tr>
        </tbody>
    </table>

    <div style="margin-top: 30px"></div>
    <button type="button" on:click={()=> step = 1}>Next</button>
</section>



<!-- SEGMENTATION -->
<section class="hidden" class:active="{step === 1}">
    <h2>Segmentation</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Industry</th>
                <th>Large(5 lack+)</th>
                <th>Medium(1-5lack)</th>
                <th>Small(~1 lack)</th>
            </tr>
        </thead>
        <tbody>
            {#each industries as I, i}
                <tr>
                    <td><input type="text" bind:value={I.name} /></td>
                    <td><input type="color" bind:value={I.large} /></td>
                    <td><input type="color" bind:value={I.medium} /></td>
                    <td><input type="color" bind:value={I.small} /></td>
                </tr>
            {/each}
        </tbody>
    </table>

    <div style="margin-top: 15px;"></div>
    <button on:click={addIndustry}>Add Industry</button>

    <div style="margin-top: 30px;"></div>
    <button on:click={()=> step = 2}>Next</button>

</section>

<!-- DEFINE COMPETITOR  -->
<section class="hidden" class:active={step === 2}>
    <h2>Competitor Data</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Competitor Name</th>
                <th>Country</th>
                <th>Revenue</th>
                <th>Funding</th>
                <th>Customers</th>
                <th>Incubated</th>
            </tr>
        </thead>
        <tbody>
            {#each comapnies as C, i}
                <tr>
                    <td><input type="text" bind:value={C.name} /></td>
                    <td><input type="text" bind:value={C.country} /></td>
                    <td><input type="text" bind:value={C.revenue} /></td>
                    <td><input type="text" bind:value={C.funding} /></td>
                    <td><input type="text" bind:value={C.customers} /></td>
                    <td><input type="text" bind:value={C.incubated} /></td>
                </tr>
            {/each}
        </tbody>
    </table>

    <div style="margin-top: 15px"></div>
    <button on:click={addCompany}>Add Comapny</button>

    <div style="margin-top: 30px"></div>
    <button type="button" on:click={() => step = 3}>Next</button>
</section>



<!-- CUSTOMER VALUE MAP  -->
<section class="hidden" class:active={step === 3}>
    <h2>CUSTOMER VALUE MAP</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Sl</th>
                <th>Attribute</th>
                {#each comapnies as C}
                    <th>{C.name}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each ATTRS as A, i}
                <tr>
                    <td>{ i + 1 }</td>
                    <td>{A}</td>
                    {#each comapnies as C, j}
                        <td><input type="text" bind:value={attributesData[i]['data'][j]}/></td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>

    <div style="margin-top: 30px"></div>
    <button on:click={() => step = 4}>Next</button>
</section>



<!-- OVERLAY DRIVER ON SEGMENTATION -->
<section class="hidden" class:active={step === 4}>
    <h2>Overlay Value Driver On Segmentation​</h2>
    <table>
        <thead>
            <tr>
                <th>Industry</th>
                <th>Large(5 lack+)</th>
                <th>Medium(1-5lack)</th>
                <th>Small(~1 lack)</th>
            </tr>
        </thead>
        <tbody>
            {#each industries as I, i}
                <tr>
                    <td><input type="text" bind:value={I.name} /></td>
                    <td><input type="text" bind:value={I.large} /></td>
                    <td><input type="text" bind:value={I.medium} /></td>
                    <td><input type="text" bind:value={I.small} /></td>
                </tr>
            {/each}
        </tbody>
    </table>

    <div style="margin-top: 30px"></div>
    <button on:click={() => step = 5}>Next</button>
</section>


<!-- COMPETITIVE MAPPING -->
<section class="hidden" class:active={step===5}>
    <h2>COMPETITIVE MAPPING</h2>
    <table border = "1">
        <thead>
            <tr>
                <th>SL</th>
                <th>Attributes</th>
                {#each comapnies as C}
                    <th>{C.name}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each ATTRS2 as A, i}
                <tr>
                    <td>{i+1}</td>
                    <td>{A}</td>
                    {#each comapnies as C, j}
                        <td><input type="text" bind:value={attributeData2[i]['data'][j]} /></td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>

    <div style="margin-top: 30px"></div>
    <button on:click={() => step = 6}>Next</button>
</section>





<!-- POSITIONING AND PRICING -->
<section class="hidden" class:active={step === 6}>
    <h2>POSITIONING AND PRICING</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Positioning and Pricing</th>
                {#each comapnies as C}
                    <th>{C.name}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each ATTRS3 as A, i}
                <tr>
                    <td>{A}</td>
                    {#each comapnies as C, j}
                        <td><input type="text" bind:value={attributeData3[i]['data'][j]}></td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
    <h4>Define Company's positioning and pricing​</h4>
    <textarea cols="60" rows="8"></textarea>

    <h4>Arrive at a single sentence that defines company’s offering​</h4>
    <textarea cols="60" rows="5"></textarea>


    <div style="margin-top: 30px"></div>
    <button on:click={()=> step = 7}>Next</button>

</section>




<!-- TESTS DONE -->
<section class="hidden" class:active="{step === 7}">
    <h2>TEST THE SYSTEM</h2>
    <h4>Ask questions what has to be true for this to work​</h4>
    <h4>Make a list of conditions that has to be true​</h4>
    <h4>Run experiment to test the conditions. Start with least likely​</h4>

    <table border="1">
        <thead>
            
            <tr>
                <th>Conditions to be Tested​</th>
                <th>Test to be conducted​</th>
                <th>Test Result​</th>
                <th>Observations/Remarks</th>
            </tr>
        </thead>
        <tbody>
            {#each tests as T}
            <tr>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
            </tr>
            {/each}
        </tbody>
    </table>

    <div style="margin-top: 15px"></div>
    <button on:click={addRow_5}>Add Test</button>

    <div style="margin-top: 30px"></div>
    <button on:click={()=> step = 8}>Next</button>
</section>





<!-- TESTS TO DO  -->
<section class="hidden" class:active="{step === 8}">
    <h2>HYPOTHESIS TO BE TESTED​</h2>
    <h4>Value Hypothesis: Will customer see value in your offering and buy it​</h4>
    <table border="1">
        <thead>
            <tr>
                <th>What Test Has been done​</th>
                <th>Results</th>
                <th>Passed/Failed​</th>
                <th>Remarks​</th>
            </tr>
        </thead>
        {#each tests2 as T}
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        {/each}
    </table>

    <div style="margin-top: 15px"></div>
    <button on:click={addRow_6}>Add Test</button>

    <div style="margin-top: 15px"></div>
    <h4>Growth Hypothesis: Will you able to acquire customer in a reasonable cost​​</h4>
    <table border="1">
        <thead>
            <tr>
                <th>What Test Has been done​</th>
                <th>Results</th>
                <th>Passed/Failed​</th>
                <th>Remarks​</th>
            </tr>
        </thead>
        {#each tests3 as T}
            <tbody>
                <tr>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        {/each}
    </table>

    <div style="margin-top: 15px"></div>
    <button on:click={addRow_7}>Add Test</button>

    <h4>Prove the model on smallest possible unit and then replicate it​</h4>


    <div style="margin-top: 30px"></div>
    <button on:click={()=> step = 9}>Next</button>
</section>




<!-- COMMERCIALIZATION SCORECARD -->
<section class="hidden" class:active="{step === 9}">
    <h2>COMMERCIALIZATION SCORECARD</h2>
    <table>
        <thead>
            <tr>
                <th>Attribite</th>
                <th>Score(1-10)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Product Availability​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Localization​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Pricing​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Sales Collaterals/Use Cases/ Case Studies​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Implementation Capabilities​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Training to Sales Team​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Referability​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Certifications​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Demo readiness​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Product Documentation/Roadmap​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Support Teams (Mktg/Presales)​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Contracts readiness​​</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Billing/Collection Process​​</td>
                <td><input type="text"></td>
            </tr>
        </tbody>
    </table>

    <div style="margin-top: 30px"></div>
    <button on:click={()=> step = 10}>Next</button>
</section>



<!-- DEFINE BRAND ARCHETYPE -->
<section class="hidden" class:active="{step === 10}">
    <h2>DEFINE BRAND ARCHETYPE ​</h2>

    <h4>I want my business to make people ___​</h4>
    <textarea cols="60" rows="8"></textarea>

    <h4>People relate to my business because it is ____​</h4>
    <textarea cols="60" rows="8"></textarea>

    <h4>My brand strongly associates with these features ____​</h4>
    <textarea cols="60" rows="8"></textarea>

    <h4>Does my brand motivate my audience?​​</h4>
    <textarea cols="60" rows="8"></textarea>

    <h4>What is the kind of connection they feel with my brand?​​</h4>
    <textarea cols="60" rows="8"></textarea>

    <div style="margin-top: 30px;"></div>
    <button on:click={step = 11}>SUBMIT</button>
</section>
<!-- <pre><code>{JSON.stringify(TO_SAVE, null, 2)}</code></pre> -->



<style>
    .hidden {
        display: none;
    }

    .active {
        display: block !important;
    }

    section {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin: 40px auto;
        padding: 20px;
        width: 90%;
    }

    h2 {
        color: #007bff;
        margin-top: 0;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
    }

    th, td {
        border: 1px solid #e0e0e0;
        padding: 12px;
        text-align: left;
    }

    th {
        background-color: #f5f5f5;
    }

    input, textarea {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        padding: 10px 20px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    textarea {
        resize: vertical;
    }
</style>