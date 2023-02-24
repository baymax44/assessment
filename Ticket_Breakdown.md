# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### 1. Create a new table for custom agent ids

1). **Description**
- Create a new table for agents' custom ids.
- An agent can work for multiple facilities so he or she can have multiple custom ids as per each facility.
- This new table will make the relationship between Facilities and Agents.

2). **Todo**
- Add a table CustomAgnetIds with the relationship between Facility and Agents, having fields like facilityId, agentId, and customId.
- Create a procedure to add entries which already exists to this table.

3). **Estimations**
- 1h

### 2. Build a new function for assigning custom id to agents for facilities 

1). **Description**
- Need to build the feature for facilities to assign custom ids to the Agents.

2). **Todo**
- Create a new method `getCustomAgentId(aid, customid, fid)` for facilites. Facilites can assign custom ID to the agents by using this method.

3). **Estimations**
- 1h

### 3. Make enhancements the `getShiftsByFacility` function for assigning custom id to agents for facilities 

1). **Description**
- Need to grab custom agent ids into the metadata of agents additionally so that they can be used when generating reports.
- Need to adjust the flow taking agent id part for the reports to takethe custom agent id.

2). **Estimations**
- 1h