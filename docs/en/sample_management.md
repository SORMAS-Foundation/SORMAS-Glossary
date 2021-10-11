## **Brief Notes**

Most outbreak investigations require collecting samples for laboratory confirmation of the causative agent. These could be specimen from humans, animals, the environment, or any combination of these. Common human clinical specimens include blood, serum, stool, urine, saliva, sputum, throat swaps, nasopharyngeal swaps, and nasal swaps. The type of specimen collected depends on the disease under investigation, the nature of the outbreak, and purpose of laboratory investigation (eg. for diagnosis of cases, monitoring seroprevalence, etc). For zoonoses, similar specimen may be taken from vectors or hosts of suspected aetiological agents for purposes of identifying the source of the outbreak. The results of a well conducted laboratory investigation of a sample are as good (useful/valid) as the appropriateness and quality of the sample.

### **Overview of the SORMAS Sample Entity**

- The type of samples documented are     specific to the disease in question.
- A case can have more than one sample documented     to be used for diagnosis of a     disease.
- A sample can have     one or more pathogen test-or additional test-results with the same or     different diseases. However, a sample can have only one final laboratory     result, derived from the different pathogen test results.
- Samples can be taken for all entities     linked to a person, for example cases, contacts, event participants, etc.
- Each sample can be created by linking it     to an entity (case, contact, event participants, etc) and hence carries     the unique ID of the entity.
- Samples can be referred to other     laboratories for further testing within SORMAS.

### **Sample Directory: Samples View**

1. **Active samples:** To display the list of active samples. Active samples are samples associated to active entities (case, contact, etc.).

2. **All:** To display the list of all samples.

3. **Apply filters:** To execute filter selections.

4. **Archived samples:** To display the list of archived samples. Archived samples are samples associated to archived entities (case, contact, etc).

5. **Basic export:** A feature used to export data of samples with the variables available on the default view.

6. **Bulk actions:** A feature used to edit the data of multiple samples in one step.

7. **By date:** To filter samples for a desired time interval between two calendar dates.

8. **By epi week:** To filter samples by a desired time interval between two epidemiological weeks.

9. **Case classification:** To filter samples by the classification of the cases with which the samples are associated/ linked to.

10. **Case samples:** To display the list of samples associated with cases.

11. **Contact samples:** To display the list of samples associated with contacts.

12. **Detailed export:** A feature used to export data of samples with all the associated variables.

13. **Disease:** To filter samples by the disease of the cases associated with the samples e.g., Acute Flaccid Paralysis, Anthrax, COVID-19, Cholera etc.

14. **District:** To filter samples by the responsible districts of their associated cases.

15. **Enter bulk edit mode:** A feature used to execute the same action (edit, delete, and archive) to many samples in one or step.

16. **Event participant samples:** To display the list of samples associated with event participants.

17. **Export:** A feature used to export data of samples in .csv format. 

18. **Lab messages:** To open the lab message directory.

19. **Laboratory:** To filter samples by their responsible laboratory.

20. **Leave bulk edit mode:** To exit bulk edit mode.

21. **Not shipped:** To display the list of samples that are not shipped to their responsible laboratory.

22. **Received:** To display the list of samples that have been received by their responsible laboratory.

23. **Referred to other lab:** To display the list of samples that are referred to another laboratory other than their responsible laboratory.

24. **Region:** To filter samples by their responsible regions.

25. **Reset filters:** To return filters to the default setting.

26. **Sample date from … to …:** To specify the start and end calendar dates of the time interval by which to filter samples.

27. **Sample date from epi week… to epi week …:** To specify the start and end epidemiological weeks of the time interval by which to filter samples.

28. **Sample ID/name, case name/epi-number:** To search for a specific sample using these suggested personal identifiers of their associated cases.

29. **Samples:** To open the samples directory.

30. **Shipped:** To display the list of samples that have been shipped to their responsible laboratory.

31. **Show more filters/show less filters:** A feature that allows a switch between the filters displayed by default and all other available filters.

32. **Specimen condition:** To filter samples by specimen condition namely, adequate, and not adequate.

33. **Test result:** To filter samples by the final outcome of laboratory tests namely, indeterminate, pending, negative, positive, and not done.

### **Sample Directory: Lab Messages View**

1. **Fetch Lab messages:** To import lab messages from an external system.

2. **First name:** The given name of the person whose sample is under investigation.

3. **Forwarded:** To display the list of forwarded lab messages.

4. **Lab name:** The name of the laboratory that reported the lab message.

5. **Lab postal code:** The postal code of the laboratory that reported the lab message.

6. **Last name:** The surname of the person whose sample is under investigation.

7. **Message date:** The calendar date on which a lab message was reported.

8. **Postal code:** The postal code of the address of the person whose sample is under investigation.

9. **Processed:** To display the list of processed lab messages.

10. **Status:** The management status of the lab message namely, unprocessed, processed, unclear, and forwarded.

11. **Test result:** The outcome of laboratory investigation.

12. **Tested disease:** The disease under investigation, i.e., the disease associated with the lab message.

13. **Unclear:** To display the list of unclear lab messages.

14. **Unprocessed:** To display the list of unprocessed lab messages.

15. **UUID:** A system-generated universally unique identifier for the sample.

### **Sample Entity**

1. **Comment:** Any comments relevant to the samples being processed.

2. **Create test result for this sample now:** A feature used to create a test result for a tested sample.

3. **Date sample was collected:** The calendar date and time the sample was collected.

4. **Dispatch details:** A description of dispatch details.

5. **External lab testing:** To specify that the sample is taken for testing in an external or reference laboratory.

6. **Field sample ID:** A unique identification number assigned to samples in the field by each responsible jurisdiction. This often corresponds a barcode or QR code.

7. **Final laboratory result:** The final laboratory result of the sample.

8. **Internal/in-house testing:** To specify that the sample is taken for antigen/internal/in-house/rapid testing.

9. **Laboratory:** The name of the responsible laboratory that tested the sample.

10. **Purpose of the sample:** To specify whether the sample is taken for external lab testing or internal/in-house testing.

11. **Reason for sampling/testing:** To specify reason for taking the sample for testing e.g., presence of symptoms, screening, returning traveler, etc.

12. **Received:** To indicate that a sample has been received by the responsible laboratory.

13. **Refer sample to another laboratory:** A feature used to open a template for referring a sample from the initial responsible laboratory to another laboratory. 

14. **Request additional tests to be performed?:** To request other test other than pathogen tests.

15. **Request pathogen test to be performed?:** To request for a pathogen test.

16. **Sample ID:** The database unique identifier of the sample.

17. **Sent or dispatched:** To indicate that a sample has been sent or dispatched to the responsible laboratory.

18. **Specify other type:** To specify any other type of sample that is not available for selection.

19. **Type of sample:** To specify the type of sample collected or tested e.g., nasal swap, blood, serum, stool, etc.

### **Create New Pathogen Test Result**

1. **CQ/CT value:** The quantification cycle or threshold cycle value of the PCR test.

2. **Date and time of result:** The calendar date and time on which the test result was ready.

3. **Laboratory:** The name of the laboratory that performed the test.

4. **PCR/RT-PCR test specification:** To specify whether the test is a polymerase chain reaction/reverse transcriptase polymerase chain reaction.

5. **Result verified by lab supervisor:** To indicate that the laboratory results have been verified by a laboratory supervisor.

6. **Test result details:** A description of details of the test result.

7. **Test result:** The outcomes of laboratory investigation namely, indeterminate, pending, negative, or positive.

8. **Tested disease variant:** To specify the variant of the disease.

9. **Tested disease:** To specify the disease for which the laboratory test was performed.

10. **Type of test:** To specify the type of laboratory test performed.

11. **Typing ID:** The PCR typing identity of the sample.

### **Create New Additional Test Results**

1. **ALT/SGPT (umol/L):** The alanine aminotransferase (serum glutamic-pyruvic transaminase) concentration of the blood sample.

2. **AST/SGOT (U/L):** The aspartate aminotransferase (Serum glutamic oxaloacetic transaminase) concentration of the blood sample.

3. **Conjugated bilirubin (umol/L):** The conjugated bilirubin concentration of the blood sample.

4. **Creatinine (umol/L):** The creatinine concentration of the blood sample.

5. **Date and time of result:** Date and time test results were reported.

6. **Haemoglobin (g/L):** The haemoglobin concentration of the blood sample.

7. **Haemoglobin in urine:** To indicate whether the urine sample is positive, negative, or indeterminate for haemoglobin.

8. **HCO3 (meq/L):** The bicarbonate ion concentration of the arterial or venous blood sample.

9. **Other performed tests and results:** To specify and describe details of the other tests performed.

10. **Oxygen therapy at time of blood gas (L/min):** The rate of oxygen therapy at the time of sampling blood for gas analysis.

11. **PAO2 (mmHg):** The partial pressure of oxygen of the arterial or venous blood sample.

12. **PCO2 (mmHg):** The partial pressure of carbon dioxide of the arterial or venous blood sample.

13. **PH:** The PH of the arterial or venous blood sample.

14. **Platelets (x109 /L):** The platelet count of the blood sample.

15. **Potassium (umol/L):** The potassium concentration of the blood sample.

16. **Protein in urine:** To indicate whether the urine sample is positive, negative, or indeterminate for protein.

17. **Prothrombin time (PT):** The prothrombin time.

18. **Red blood cells in urine:** To indicate whether the urine sample is positive, negative, or indeterminate for red blood cells.

19. **Total bilirubin (umol/L):** The total bilirubin concentration of the blood sample.

20. **Urea (mmol/L**): The urea concentration of the blood sample.

21. **WBC count (x109 /L):** The white blood cell count of the blood sample.

 
