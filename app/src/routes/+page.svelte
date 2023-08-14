<script>

    let step = 5;


    let comapnies = [];
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

</script>

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


<section class="hidden" class:active={step === 1}>
    <h2>Competitor Data</h2>
    <table border="1">
        <tr>
            <th>Competitor Name</th>
            <th>Country</th>
            <th>Revenue</th>
            <th>Funding</th>
            <th>Customers</th>
            <th>Incubated</th>
        </tr>
        {#each comapnies as C, i}
                <tr>
                    <td>
                        <input type="text" bind:value={C.name} />
                    </td>
                    <td>
                        <input type="text" bind:value={C.country} />
                    </td>
                    <td>
                        <input type="text" bind:value={C.revenue} />
                    </td>
                    <td>
                        <input type="text" bind:value={C.funding} />
                    </td>
                    <td>
                        <input type="text" bind:value={C.customers} />
                    </td>
                    <td>
                        <input type="text" bind:value={C.incubated} />
                    </td>
                </tr>
        {/each}
    </table>

    <div style="margin-top: 15px"></div>
    <button on:click={addCompany}>Add Comapny</button>

    <div style="margin-top: 30px"></div>
    <button type="button" on:click={() => step = 2}>Next</button>
</section>


<section class="hidden" class:active={step === 2}>
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
    <button on:click={() => step = 3}>Next</button>
</section>

<section class="hidden" class:active={step===3}>
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
    <button on:click={() => step = 4}>Next</button>
</section>


<section class="hidden" class:active={step === 4}>
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
    <button on:click={()=> step = 5}>Next</button>

</section>


<section>
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
    </table>
</section>
<!-- <pre><code>{JSON.stringify(TO_SAVE, null, 2)}</code></pre> -->


<style>
    .hidden {
        display: none;
    }

    .active {
        display: block !important;
    }
</style>