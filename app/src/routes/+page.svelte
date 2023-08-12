<script>
  import { each } from "svelte/internal";

    let numCompetitors = 0;
    let competitorData = [];
    let additionalTables = [];
    let tableData = [];
    let nextPageButton = false;
    let nextButtonClicked = false;
    let nextPageButton2 = false;


    function generateTable() {
        competitorData = Array.from({ length: numCompetitors }, (_,index) => ({
            id: index + 1,
            name: `Competitor ${index + 1}`,
            country: "",
            revenue: 0,
            funding: 0,
            customers: "",
            // Add more properties as needed
        }));
    }

    function createNewTable() {
        if (numCompetitors > 0) {
            tableData = Array(11).fill(0).map((_, rowIndex) => ({
                id: rowIndex + 1,
                data: Array(numCompetitors).fill(0).map((_, colIndex) => ({
                    id: colIndex + 1,
                    value: "",
                })),
            }));

            // Create a new table with 5 rows
            const compitTableData = Array(5).fill(0).map((_, rowIndex) => ({
                id: rowIndex + 1,
                data: Array(numCompetitors).fill(0).map((_, colIndex) => ({
                    id: colIndex + 1,
                    value: "",
                })),
            }));

            additionalTables = [...additionalTables, compitTableData];

            nextButtonClicked = true;
        }
    }

    function createPricPosTable() {
        const pricPosTable = Array(2).fill(0).map((_,rowIndex) => ({
            id: rowIndex + 1,
            data: Array(numCompetitors).fill(0).map((_,colIndex) => ({
                id: colIndex + 1,
                value: "",
            })),
        }));

        // additionalTables = [...additionalTables, pricPosTable];
        nextPageButton = true;
    }

</script>

<main>

<h1>Client Details</h1>

<!-- Goal Settings -->
<form>
    <table>
        <tr>
            <th>Goals</th>
            <th>Current</th>
            <th>1 Year</th>
            <th>2 Year</th>
        </tr>
        <tr>
            <td><label for="revenue">Revenue</label></td>
            <!-- <td><input type="text" id="revenue" name="revenue" /></td> -->
            <td><input type="text" id="currentRevenue" name="currentRevenue" /></td>
            <td><input type="text" id="revenue1Year" name="revenue1Year" /></td>
            <td><input type="text" id="revenue2Years" name="revenue2Years" /></td>
          </tr>
          <tr>
            <td><label for="numCustomers">Number of Customers</label></td>
            <!-- <td><input type="text" id="numCustomers" name="numCustomers" /></td> -->
            <td><input type="text" id="currentNumCustomers" name="currentNumCustomers" /></td>
            <td><input type="text" id="numCustomers1Year" name="numCustomers1Year" /></td>
            <td><input type="text" id="numCustomers2Years" name="numCustomers2Years" /></td>
          </tr>
          <tr>
            <td><label for="numUsers">Number of Users</label></td>
            <!-- <td><input type="text" id="numUsers" name="numUsers" /></td> -->
            <td><input type="text" id="currentNumUsers" name="currentNumUsers" /></td>
            <td><input type="text" id="numUsers1Year" name="numUsers1Year" /></td>
            <td><input type="text" id="numUsers2Years" name="numUsers2Years" /></td>
          </tr>
          <tr>
            <td><label for="ebit">EBIT</label></td>
            <!-- <td><input type="text" id="ebit" name="ebit" /></td> -->
            <td><input type="text" id="currentEBIT" name="currentEBIT" /></td>
            <td><input type="text" id="ebit1Year" name="ebit1Year" /></td>
            <td><input type="text" id="ebit2Years" name="ebit2Years" /></td>
          </tr>
          <tr>
            <td><label for="revPerCustomer">Revenue per Customer</label></td>
            <!-- <td><input type="text" id="revPerCustomer" name="revPerCustomer" /></td> -->
            <td><input type="text" id="currentRevPerCustomer" name="currentRevPerCustomer" /></td>
            <td><input type="text" id="revPerCustomer1Year" name="revPerCustomer1Year" /></td>
            <td><input type="text" id="revPerCustomer2Years" name="revPerCustomer2Years" /></td>
          </tr>
    </table>
</form>

<div style="margin-top: 40px;"></div> <!-- Add space here -->



<!-- Question -->
<form>
    <label for="numCompetitors">Number of Competitors in the market:</label>
    <input 
        type="number" 
        id="numCompetitors" 
        name="umCompetitors" 
        step="1" bind:value={numCompetitors}
    />
    <button type="button" on:click={generateTable}>Generate Table</button>
</form>


<!-- Dynamic Table 1 -->
<!-- Competitors -->
{#if competitorData.length > 0}
<h2>Competitor Information</h2>
<table>
    <tr>
        <th>Competitor Name</th>
        <th>Country</th>
        <th>Revenue</th>
        <th>Funding</th>
        <th>Customers</th>
        <!-- Add more columns as needed -->
    </tr>
      
    {#each competitorData as competitor, index}
    <tr>
        <td>
            <input type="text" id={`competitorName_${index}`} bind:value={competitor.name}/>
        </td>
        <td>
            <input type="text" id={`Country_${index}`} bind:value={competitor.country}/>
        </td>
        <td>
            <input type="number" id={`Revenue_${index}`} bind:value={competitor.revenue}/>
        </td>
        <td>
            <input type="number" id={`Funding_${index}`} bind:value={competitor.funding}/>
        </td>
        <td>
            <input type="text" id={`competitorCustomer_${index}`} bind:value={competitor.customers}/>
        </td>
    </tr>
    {/each}
</table>
{/if}


<div style="margin-top: 30px;"></div> <!-- Add space here -->

<!-- Next Table Button -->
{#if !nextButtonClicked}
    <button type="button" on:click={createNewTable}>Next</button>
{/if}




{#if nextButtonClicked}
    <!-- <h2>Dynamic Table</h2> -->
    <table>
      <tr>
        <th>ID</th>
        <th>Attribute</th> 
        <th>You(1-10)</th> 
        {#each competitorData as competitor}
          <th> {competitor.name} (1-10)</th>
        {/each}
      </tr>
      {#each tableData as rowData}
        <tr>
            <td>{rowData.id}</td>
            <td>
                <select id={`attribute_${rowData.id}`} bind:value={rowData.attribute}>
                <option value="" disabled>Select Attribute</option>
                <option value="Brand/Trust">Brand/Trust</option>
                <option value="Reliability">Reliability</option>
                <option value="Scalability">Scalability</option>
                <option value="Cost">Cost</option>
                <option value="References/Ind. Experience">References/Ind. Experience</option>
                <option value="Speed/Ease of Deployment">Speed/Ease of Deployment</option>
                <option value="Ease of Use">Ease of Use</option>
                <option value="Comprehensiveness">Comprehensiveness</option>
                <option value="Robustness">Robustness</option>
                <option value="Certifications">Certifications</option>
                <option value="Longevity">Longevity</option>
                </select>
            </td>
            <td>
                <input
                  type="number"
                  id={`you_${rowData.id}`}
                  min="1"
                  max="10"
                  bind:value={rowData.you}
                />
            </td>
            {#each rowData.data as cell, columnIndex}
                <td>
                    <input
                        type="number"
                        id={`data_${rowData.id}_${cell.id}`}
                        bind:value={competitorData[columnIndex].value}
                    />
                </td>
            {/each}
        </tr>
      {/each}
    </table>

    {#each additionalTables as tableData}
    <h2>Compititive Mapping</h2>
    <table>
        <tr>
          <th>ID</th>
          <th>Attribute</th> 
          <th>You(1-10)</th> 
          {#each competitorData as competitor}
            <th> {competitor.name} (1-10)</th>
          {/each}
        </tr>
        {#each tableData as rowData}
          <tr>
              <td>{rowData.id}</td>
              <td>
                  <select id={`attribute_${rowData.id}`} bind:value={rowData.attribute}>
                  <option value="" disabled>Select Attribute</option>
                  <option value="Technology Strength">Technology Strength</option>
                  <option value="Economics of Scale">Economics of Scale</option>
                  <option value="Cost Advantage (Low-cost Locations)">Cost Advantage (Low-cost Locations)</option>
                  <option value="Brand/Customer Ref">Brand/Customer Ref</option>
                  <option value="Stickiness(Network Effect, Migration cost)">Stickiness(Network Effect, Migration cost)</option>
                  </select>
              </td>
              <td>
                  <input
                    type="number"
                    id={`you_${rowData.id}`}
                    min="1"
                    max="10"
                    bind:value={rowData.you}
                  />
              </td>
              {#each rowData.data as cell, columnIndex}
                  <td>
                      <input
                          type="number"
                          id={`data_${rowData.id}_${cell.id}`}
                          bind:value={competitorData[columnIndex].value}
                      />
                  </td>
              {/each}
          </tr>
        {/each}
    </table>
    {/each}

{/if}


<div style="margin-top: 40px;"></div> <!-- Add space here -->


<!-- P2 Button -->
{#if !nextPageButton && nextButtonClicked}
    <button type="button" on:click={createPricPosTable}>P2</button>
{/if}

{#if nextPageButton}
    <h2>Pricing and Positioning</h2>
    <table>
        <tr>
            <th></th>
            {#each competitorData as competitor}
                <th>{competitor.name}</th>
            {/each}
        </tr>
        <tr>
            <td>Price</td>
            {#each competitorData as competitor}
                <td><input type="text" bind:value={competitor.price}></td>
            {/each}
        </tr>
        <tr>
            <td>Position</td>
            {#each competitorData as competitor}
                <td><input type="text" bind:value={competitor.position} /></td>
            {/each}
        </tr>
    </table>

    <div style="margin-top: 30px;"></div> <!-- Add space here -->

    <!-- Question 1: Define Company's Positioning and Pricing -->
    <h2>Define Company's Positioning and Pricing</h2>
    <textarea id="companyPositioning" rows="5" cols="80"></textarea>
    
    <div style="margin-top: 40px;"></div> <!-- Add space here -->
    
    <!-- Question 2: Arrive at a Single Sentence that Defines Company’s Offering -->
    <h2>Arrive at a Single Sentence that Defines Company’s Offering</h2>
    <textarea id="companyOffering" rows="5" cols="80"></textarea>
    

{/if}

<div style="margin-top: 30px;"></div> <!-- Add space here -->


{#if nextButtonClicked && nextPageButton && !nextPageButton2}
<button type="button">P3</button>
{/if}

{#if nextPageButton2}
<h2>Test the System</h2>
<ol>
    <li>Review the positioning and pricing definition.</li>
    <li>Refine the single sentence that defines your company’s offering.</li>
    <li>Click the "Go To App" button to proceed and finalize your goals and strategies.</li>
</ol>
{/if}


</main>


<div style="margin-top: 80px;"></div> <!-- Add space here -->


<a href="/app">Go TO APP</a>
