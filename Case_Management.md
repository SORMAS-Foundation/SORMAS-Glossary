## **Brief Notes**    

A case of a disease, syndrome, or health condition is determined by a set of standard clinical, laboratory, and epidemiological criteria called case definitions. Case definitions are useful for making uniform decisions of whether or not; an individual has a disease or health event of interest. 

* The clinical criteria include characteristic signs and symptoms of the disease in question.

* The epidemiological criteria (person, place, and time) include the characteristics of the population at risk (person), the geographical location or distribution of cases or event (place), and the timing of event or outbreak (time). For example, an exposure to possible infection such as a confirmed case, animals, substances, or a geographical area (jurisdiction) with ongoing outbreak will constitute an epidemiological link.

* Laboratory criteria consist of at least one positive pathogen test for an infectious disease. 

Based on the applicable criteria, cases are generally classified into three categories (case classification). These categories in increasing order of certainty of diagnosis are: 

**Suspected case:** a person that exhibits compatible clinical signs and/or symptoms of a given disease or syndrome, but without laboratory confirmation. 

**Probable case:** a person that exhibits compatible clinical features and has an epidemiological link to a confirmed case or an outbreak, but without laboratory confirmation. 

**Confirmed case:** a person that has a laboratory confirmation of disease or syndrome (at least one positive pathogen test for an infectious disease) with or without clinical symptoms or epidemiological link. 

## **Overview of Case Directory on SORMAS**

The default view of the case directory displays the list of cases in the system. It also has icons to permit users to perform operations such as creating a case, importing list of cases, exporting cases from the system, and bulk editing of cases. It also displays filters, for viewing the case lists by desired variables. The detailed view displays the list of cases with more variables. The follow-up view displays cases under monitoring (follow-up) with information on the daily status of each case over the follow-up period. 

For a detailed understanding of the filters and icons on the case directory, we recommend that you first read the section titled “Case Entity”

### **Glossary to Default and Detailed Views of Case Directory**

1. **Active cases:** To filter active cases. Active cases are those that are still under investigation, follow-up, or clinical management. 
2.	**All cases:** To display both active and archived cases.
3.	**Apply filters:** To execute filter selections.
4.	**Archived cases:** To Filter cases that have been archived. 
5.	**Basic export:** A feature used to export case data with the variables available on the default view.
6.	**By date:** To filter cases by a time interval of notification or report. The time interval can either be a calendar period or epidemiological week.
7.	**Case classification:** To filter cases by the case classification (unclassified, suspected, probable, confirmed, not a case). 
8.	**Case management export:** A feature used to export cases with their associated clinical assessment, prescription and treatment data.
9.	**Case Origin:** To filter cases using the origin of the case (in-country, point of entry). In-country cases are cases identified within the country, while point of entry cases are those identified at boarders to the country (imported cases).
10.	**Custom case export**: A flexible user-defined export feature that allows users to define the variables of cases they wish to export. 
11.	**Default view:** The listing of cases with pre-selected subset of variables.
12. **Detailed export:** A feature used to export data with all the variables of a case including associated samples and pathogen tests.
13. **Detailed view:** The listing of cases with additional variables.
14.	**Disease:** To filter cases by the disease Acute Flaccid Paralysis, Anthrax, COVID-19, Cholera, etc. 
15.	**Enter bulk edit mode:** A feature used to execute the same action (edit, delete, and archive) to many cases in one process or step.
16.	**Export:** A feature used to export data in .csv format. 

	Filters on the default and detailed views of the case directory permit users to sort case by variables of interest. These are:

17.	**Follow-up status:** To filter cases by their state of follow-up (under follow-up, completed follow-up, cancelled follow-up, lost to follow-up, and no follow-up).
18.	**Follow-up until:** To filter cases by their expected date of last follow-up.
19.	**Follow-up:** The summary page of the daily monitoring / follow-up records of cases.
20.	**Import:** A feature used to import cases. Cases can be imported as either line listing, or detailed import of cases into the SORMAS database from a .csv file. Line listing is used to import cases with variable related to the case person only while detailed case import can be used to import cases together with their samples and pathogen tests. 
21.	**Investigation discarded:** To filter cases whose investigation status have been discontinued.
22.	**Investigation done:** To filter cases whose investigation status is completed. 
23.	**Investigation pending:** To filter cases whose investigation status is still pending.
24.	**Line listing:** A feature for quick case creation. For cases with the same disease and jurisdiction (region, district, facility), the user just has to specify these once and then only complete the person specific data for each case.
25.	**Merge duplicates:** A feature used to detect and merge duplicate cases.
26.	**Month of birth:** To filter cases by the calendar month of birth.
27.	**More:** A feature that presents users with additional functionalities within the default and detailed views of case directory namely: ‘open case guide', ‘enter bulk edit mode’, ‘merge duplicates’, and ‘search for specific case’.
28.	**Most relevant date:** To specify the date type used on the time filter namely: symptom onset date, case report date, and most relevant date (combination of both onset and report date, depending on available data)
29. **New case:** A feature to register a new case.
30.	**New cases from …. to:** A composite filter for selecting cases by a desired period (date range).
31.	**Open case guide:** A feature used to display how performance indicators (e.g. data completeness) of a case are defined in SORMAS.
32. **Outcome of case:** To filter cases by outcome namely: no outcome, recovered, deceased, and unknown.
33.	**Present condition:** To filter cases by the present condition of the associated case person (alive, dead, buried, and unknown).
34.	**Quarantine end:** To filter cases by the last date of quarantine.
35.	**Reported by:** To filter cases by the role of the users who created them.
36.	**Reporting user:** To filter cases by the username of the user who created them.
37.	**Reset filters:** To return filters to the default setting.
38.	**Responsible region:** To filter cases by a region in a country where a case was identified.
39.	**Responsible surveillance officer:** To filter cases by surveillance officers responsible them.
40.	**Sample export:** A feature used to export sample data of cases.
41.	**Search specific case:** A feature used to search for a specific case. Search text can be case ID, external ID, or epid number.
42.	**Show more filters/Show less filters:** A feature that allows a switch between the filters displayed by default and all the possible filters.
43.	**Year of birth:** To filter cases by the calendar year of birth. 

### Case Data

1. **ATC code:** The code assigned to a vaccine by Anatomical Therapeutic Chemical (ATC) classification system of the WHO.
2. **Batch Number:** The numeric or alphanumeric designation of a vaccine for identifying and tracing the vaccine by manufacturer, date of production and other unique information.
3. **Blood/organ/tissue donation in the last 6 months:** To state whether or not the case has donated any one of these in preceding 6 months to report date.
4. **Cancel follow-up:** To indicate the decision to stop follow-up of the case.
5. **Case classification:** The classification assigned to the case according to case definition.
6. **Case ID:** A system-generated non-editable unique case identification number.
7. **Case identification source:** The means by which the case was identified, e.g., screening, contact tracing, outbreak investigation, etc.
8. **Classifying user:** The user account that classified the case from “not yet classified” to any other classification.
9. **Clinical confirmation:** To state whether or not the signs and symptoms of the case are documented or unknown.
10. **Date of classification:** The date on which the case was classified to any other category apart from the default “Not yet classified”.
11. **Date of first vaccination:** The Calendar date on which the case received the first dose of a multi-dose vaccine.
12. **Date of last vaccination:** The Calendar date on which the case received the last dose of a vaccine.
13. **Date of outcome:** The calendar date on which the outcome of the case was determined.
14. **Date of report:** The calendar  date that the case was made known to a public health authority (e.g. hospital, local health department, clinician etc.).
15. **Date received at district level:** The calendar date on which the district surveillance office received a hard copy of case investigation form.
16. **Date received at national level:** The calendar date on which the national surveillance office received a hard copy of case investigation form.
17. **Date received at regional level:** The calendar date on which the regional surveillance office received a hard copy of case investigation form.
18. **Delete:** A feature used to soft delete cases from the statistics, export or view of the user but maintains them in the database.
19. **Discard:** A featured used to undo changes or edits.
20. **Disease variant:** The specific mutant of the causative organism of a disease with variants. 
21. **Disease:** The disease of the case, e.g., Acute Flaccid Paralysis, Anthrax, COVID-19, Cholera, etc.
22. **EPID Number:** A system-generated or user specified unique number to identify cases of a specific disease.
23. **Epidemiological confirmation:** To state whether or not the epidemiological data (time, person, and place) of the case are documented or unknown.
24. **External ID:** A unique number to identify cases of a specific disease in another system. This is used when linking cases between SORMAS and another system.
25. **External token:** A unique token from an external system.
26. **Facility category:** The category of the facility that notified or accommodated the case, namely: designated accommodation, medical facility, residence.
27. **Facility type:** The type of facility that notified or provided medical care to the case, namely: hospital, rehabilitation facility,etc.
28. **Facility:** The name of the specific health facility that notified or provided medical care to the case.
29. **Follow-up status comment:** Any comment relevant to the follow-up and monitoring of a case.
30. **Follow-up until:** The calendar date for the end of case follow-up.
31. **General comment:** Any additional information or remark related to the case.
32. **Home-based quarantine possible?:** To state whether or not the case can be suitably quarantined at home based on existing protocol.
33. **Infection setting:** The immediate exposure place or circumstance by which the case that resulted from a nosocomial outbreak is likely to have acquired the infection.
34. **Information provided by physician:** To classify a previously “not yet classified” case as “not a case” based on a physician’s clinical diagnosis.
35. **INN:** The International Nonproprietary Name of a vaccine.
36. **Investigation date:** The start date of an investigation.
37. **Investigation status:** The investigation status of the case as reported by the activities of the public health officer, namely: pending/done/discarded.
38. **Laboratory diagnostic confirmation:** To state whether the outcome of laboratory investigation of the case is available or unknown.
39. **Lost to follow up:** To indicate that the case is not reachable (for any reason) before the end of the stipulated follow-up period.
40. **Manufacturer:** The name of the pharmaceutical company that produces a given vaccine.
41. **Name of responsible clinician:** The name of the clinician in charge of the case.
42. **Name of responsible surveillance officer:** The public health officer who has been assigned the responsibility of following-up on the case.
43. **Negative test result for disease:** To Classify a previously “not yet classified” case as “not a case” based on negative laboratory pathogen test result.
44. **Outcome of case:** To specify whether the case person recovered or died as a result of the disease.
45. **Overwrite follow-up until date:** To modify the stipulated end of follow-up date of the case.
46. **Place description:** The description of the home of the case for cases receiving care at home.
47. **Point of entry name and description:** The name and other identifying information of a point of entry.
48. **Point of entry:** The entry routes to a country, namely: airports, seaports, and ground crossings.
49. **Postpartum:** To specify if the case person is within 42 days post-delivery (puerperium).
50. **Pregnancy:** To specify if the case person is pregnant.
51. **Previous infection date:** The calendar date of last infection with the same disease as the current one.
52. **Prohibition to work from:** The first calendar date on which the case is prohibited to work.
53. **Prohibition to work until:** The last calendar date for which the case is prohibited to work.
54. **Prohibition to work:** To state whether the case is temporarily prohibited to work.
55. **Quarantine:**  The type of place (home, designated facility, etc.) where the case person  was quarantined (kept separated from the general population under restricted movement for observation).
56. **Quarantine end:** The calendar date for the end of quarantine.
57. **Quarantine ordered by official document:** To indicate that the case person was placed on quarantine based on an official written order from the authorities.
58. **Quarantine ordered verbally:** To indicate that the case person was placed on quarantine based on a verbal order for the authorities.
59. **Quarantine start:** The calendar date for the start of quarantine.
60. **Reinfection:** To state whether the case in question resulted from reinfection following previous recovery from the same disease.
61. **Report GPS Accuracy:** The radius (measured in meters) of the place (facility) that reported the case, within which the case can be located.
62. **Report GPS latitude:** The latitude of the place where the case was reported.
63. **Report GPS longitude:** The longitude of the place (facility) where the case was reported.
64. **Reporting user:** The user account that registered the case in SORMAS.
65. **Responsible Community:** The community within a region where the case was identified (this might not be the community of residence of the person as captured under “case person” data).
66. **Responsible District:** District within a region where the case was identified. (This might not be the district of residence of the person as captured under “case person” data).
67. **Resulted from nosocomial outbreak:** To specify the case that acquired the infection (disease) in question from an outbreak in healthcare facilities.
68. **Sequelae:** To state the presence of disease complications in cases that have recovered.
69. **Source of vaccine information:** The source of the vaccination information. This could be a vaccination card, oral communication, no evidence, or unknown.
70. **Trimester:** Any of the three 3-month phases of pregnancy.
71. **UNII code (Unique Ingredient Identifier code):** An alphanumeric identifier linked to a vaccine’smolecular structure or descriptive information.
72. **Vaccination status for this Disease:** To specify whether the case is vaccinated, unvaccinated, or unknown.
73. **Vaccine dose:** The number of doses of a vaccine that the case had received.
74. **Vaccine name:** The formally approved name of a vaccine.
75. **Verification of different pathogen:** To classify a previously “not yet classified” case as “not a case” based on identification of a different causative pathogen.

### Case Person

This section contains information about a person entity in SORMAS. A person can be liked to different entities such as cases, contacts, event participants, and immunization participant.   These glossary definitions apply to all the entities of a person mentioned.

1. **Additional information:** Additional information on the person’s address.
2. **Address name and description:** To specify and describe an address type of the person that is different from either home, place of work, or place of isolation.
3. **Address type:** The type of address of the person, namely home, place of work, place of isolation, or other.
4. **Age:** The age of the person in years, months, or days.
5. **Area type:** The area type of the person’s address, namely urban and rural.
6. **Citizenship:** The person’s country of citizenship.
7. **City:** The city of the person’s address.
8. **Community contact person:** The name of a contact person in the person’s community.
9. **Community:** The community of the person’s address.
10. **Country of birth:** The person’s country of birth.
11. **Country:** The country of the person’s address.
12. **Date of birth:** The date of birth of the person in years, months, or days.
13. **District:** The district of the person’s address.
14. **Education:** The educational level of the person.
15. **Email:** The email address of the person.
16. **Facility category:** The facility category of the person’s address, e.g., accommodation, medical facility, care facility etc.
17. **Facility type:** The facility type of the person’s address.
18. **Facility:** The facility name of the person’s address.
19. **Father’s name:** The name of the person's father.
20. **First name:** The given name of the person.
21. **General practitioner name and contact details:** The name and contact details of the person’s general practitioner.
22. **GPS accuracy in m:** The radius (measured in meters) of the location of the person's address.
23. **GPS latitude:** The GPS latitude of the person’s address.
24. **GPS longitude:** The GPS longitude of the person’s address.
25. **Home address:** The home address of the person.
26. **House number:** The house number of the person.
27. **Last name:** The surname or family name of the person.
28. **Mother’s maiden name:** The maiden name of the person's mother.
29. **Mother’s name:** The name of the person's mother.
30. **Names of guardians:** The names of the person's guardians.
31. **National Health ID:** The national health identification number of the person.
32. **Nick name:** The nick name of the person.
33. **Owner of phone:** The name of the owner of the phone.
34. **Passport number:** The valid national passport number of the person.
35. **Person ID:** A system generated unique identification number of the person.
36. **Phone number:** The phone number of the person.
37. **Postal code:** Postal code of the person’s address.
38. **Present condition of person:** To specify condition of the person at the time of reporting, namely alive, dead, buried, or unknown.
39. **Region:** The region of the person's address.
40. **Salutation:** The greeting before the name of the person, e.g., Dear sir, Dear family, etc.
41. **Sex:** The sex of the person.
42. **Staff of armed forces:** To state if the person is, or has close associations with the military.
43. **Street:** The street of the person’s address.
44. **Type of occupation:** The main occupation of the person.
45. **Units:** The unit of the age of the person, namely years, months, or days.

### Hospitalization

1.	**Date of discharge or transfer:** The calendar date on which the case was discharged or transferred out of a hospital.
2.	**Date of isolation:** The calendar date on which the case was sent to the isolation unit.
3.	**Date of visit or admission:** The calendar date on which the case visited or was admitted to a hospital.
4.	**End of stay:** The last calendar date of stay in an intensive care unit (ICU).
5.	**Hospital name:** The name of the hospital that the case person was admitted. 
6.	**Isolation:** The specify if the case received care in the isolation unit of a hospital.
7.	**Left against medical advice:** To specify if the case left a hospital against medical advice.
8.	**Previous hospitalizations:** To provide data on previous hospitalizations of the case person namely, period of hospitalization, hospital name, region, district, community, description of previous illness, isolation, etc.
9.	**Reason for hospitalization:** To state the reason for admission to a hospital namely, reported disease, other reason, unknown.
10.	**Start of stay:** The first calendar date of stay in an intensive care unit (ICU).
11.	**Stay in intensive care unit:** To specify if the case received care in an intensive care unit of a hospital.
12. **Was patient admitted to the hospital as an inpatient?:** To specify if the case was admitted to a hospital as an inpatient.
13.	**Was the patient hospitalized or did he or she visit a health clinic previously for this illness?:** To specify if this applies to the case. 

### Symptoms

This section is the sum of all the symptoms of the person while they were a case, starting with the presenting symptoms at time of case identification. Since the clinical course and follow-up sections of a case also documents daily symptoms of the case for each assessment of the case person, the system automatically adds all these symptoms to this section. 

1.	**Cardiovascular:** The cardiovascular symptoms of the case e.g., fast heart rate (tachycardia).
2.	**Comments:** Any relevant comments on data provided on symptoms of the case. 
3.	**Complications:** To specify the types of disease complications the case develops e.g., altered level of consciousness, sepsis, haemorrhagic syndrome etc.
4.	**Date of symptom onset:** The calendar date on which the case developed the first symptom.
5.	**First Symptom:** The first symptom that the case developed.
6.	**Gastrointestinal:** The gastrointestinal symptoms of the case e.g., abdominal pain, anorexia, diarrhoea, etc.
7.	**General:** The non-specific symptoms of the case e.g., fever, headache, feeling ill etc.
8.	**Maximum body temperature:** The maximum body temperature of the case within a day – measured in degree Celsius.
9.	**Respiratory:** The respiratory symptoms of the case e.g., cough, runny nose, rapid breathing etc.
10.	**Source of body temperature:** The body part of the case from which temperature was measured namely, axillary, oral, rectal, or noncontact (infrared).

### Epidemiological Data 

1.	**< 1.5 m distance:** To specify whether, or not the case was less than 1.5 meters away from the source case.
2.	**> 15 minutes face-to- face contact:** To specify whether or not the case spent more than 15 minutes face-to-face with the source case.
3.	**Activity details known:** To specify whether, or not the details of the exposure activities of the case are known.
4.	**Additional information:** Any additional information for identifying the place the case was exposed or involved in any health hazard exposure activity.
5.	**Address:** The address of the place where the case was exposed to a disease or involved in any health hazard exposure activity.
6.	**Animal market:** To specify whether, or not the case was exposed to an animal market.
7.	**Area type:** The area type in which the case was exposed or involved in any health hazard exposure activity, namely rural, urban, or unknown.
8.	**City:** The city in which the case was exposed or involved in any health hazard exposure activity.
9.	**Community contact person:** The full name of the person in the community by which the case can be contacted.
10.	**Community:** The community in which the case was exposed or involved in any health hazard exposure activity. 
11.	**Contact to blood or body fluids:** To specify whether, or not the case was exposed by contact with blood or other body fluids.
12.	**Contact to source case:** The full name of the person by whom the source case can be contacted.
13.	**Contact to the source case:** The full name of the person through whom the source case can be contacted.
14.	**Contact with source case known:** To specify if there is a known contact with a source case.
15.	**Continent:** The continent in which the case was exposed to the disease or, involved in any health hazard exposure activity.
16.	**Country:** The country in which the case was exposed to disease or involved in any health hazard exposure activity.
17. **Date:** The calendar date on which the case was exposed to a disease or involved in any health hazard exposure activity. 
18.	**Description:** A brief narration of the circumstances leading to exposure of the case to a disease.
19.	**District:** The district in which the case was exposed to the disease or involved in any health hazard exposure activity.
20.	**End of activity:** The last calendar date on which the case was involved in an exposure activity.
21.	**End of exposure:** The last calendar date on which the case was exposed.
22.	**Exposure details known:** To state whether, or not the exposure details of the case to a disease or any health hazard exposure activities are known.
23.	**Facility (IFSG):** To specify if the facility is associated with the Law for the Prevention and Control of Infectious Diseases in Humans (Infection Protection Act - IfSG) 
24.	**GPS accuracy in M:** The radius (measured in meters) of the location where the case was exposed or involved in any health hazard exposure activity. 
25.	**GPS latitude:** The latitude of the place where the case was exposed or involved in any health hazard exposure activity.
26.	**GPS longitude:** The longitude of the place where the case was exposed or involved in any health hazard exposure activity.
27.	**Handling samples (animal or human):** To specify whether, or not the case was exposed by handling animal or human samples.
28.	**House number:** The number of the house in which the case was exposed or involved in any health hazard exposure activity.
29.	**Indoors:** To specify whether, or not the case was exposed by an indoor activity.
30.	**Name of source case:** The full name of the source case.
31. **Other protective measures:** To specify whether, or not the case took other protective measures at the time of exposure.
32.	**Outdoors:** To specify whether, or not the case was exposed by an outdoor activity.
33.	**Percutaneous exposure:** To specify whether, or not the case was exposed through the skin.
34.	**Postal code:** The postal code of the place where the case was exposed or involved in any health hazard exposure activity.
35.	**Probable infection environment:** To indicate that the associated exposure is the probable infection environment of the case.
36.	**Region:** The region in which the case was exposed to the disease or involved in any health hazard exposure activity.
37. **Residing or traveling to countries/territories/areas experiencing larger outbreaks of local transmission:** To specify if this applies to the case.
38.	**Residing or working in an area with high risk of transmission of the disease e.g., closed residential and camp-like settings:** To specify if this applies to the case.
39. **Risk areas as defined by public health institution:** The specify whether, or not, the public health risks by which the case was exposed are known. 
40.	**Role:** The role that the case played in the activity that exposed him or her to a disease e.g., passenger, staff, medical staff etc.
41.	**Start of activity:** The first calendar date on which the case was involved in an exposure activity.
42.	**Start of exposure:** The first calendar date on which the case was exposed.
43.	**Street:** The street in which the case was exposed or involved in any health hazard exposure activity.
44.	**Subcontinent:** The subcontinent in which the case was exposed to the disease or involved in any health hazard exposure activity.
45.	**Type of activity:** The activity by which the case was exposed namely, work, habitation, care for (caring for the sick), other, unknown.
46.	**Type of Activity:** The type of activity by which the case was exposed to a disease, e.g., work, travel, sports etc.
47.	**Type of place:** The settings in which the case was exposed to a disease e.g., festivities, facility, home, public place, etc. 
48.	**Wearing appropriate PPE:** To specify whether, or not the case wore appropriate personal protective equipment at the time of exposure.
49.	**Wearing mask:** To specify whether, or not the case wore a mask at the time of exposure.

### Therapy

1.	**Additional notes:** Additional information on the prescription and treatment execution.
2.	**Bulk actions:** A feature used to edit the prescriptions of multiple cases in one step or process.
3.	**Date prescription issued:** The calendar date on which prescription was issued.
4.	**Dose:** The dose of the treatment the case person received.
5.	**Executing staff member:** The full name of the staff member who administered a treatment. 
6.	**Frequency:** The daily frequency of treatment administration, and the length of treatment course.
7.	**Name of drug:** The generic, non-proprietary or official name of the drug described in official books of reference like pharmacopoeias. Avoid proprietary or brand names.
8.	**New prescription:** A feature used to open a blank prescription form for users to create new prescriptions.
9.	**New treatment:** A feature used to open a blank treatment form for users to record new treatments.
10.	**Prescribing clinician:** The full name of prescribing clinician.
11.	**Prescription details or prescribing clinician:** To filter the list of prescriptions by the additional information on prescription or the full name of the prescribing clinician.
12.	**Prescription details:** Additional information on the prescription.
13.	**Prescription route:** The prescribed route of treatment administration e.g., oral, IV, topical, rectal, etc.
14.	**Prescription type:** The type of treatment the clinician prescribed to the case person e.g., drugs intake, Intravenous (IV) fluids, oxygen therapy, etc.
15.	**Prescription type:** To filter the list of prescriptions by the prescription type.
16.	**Route:** The route of treatment administration e.g., oral, IV, topical, rectal, etc.
17.	**Treatment date and time:** The calendar date and time a treatment was administered.
18.	**Treatment details or executing officer:** Additional information on treatment and, or the full name of officer who administered the treatment.
19.	**Treatment details:** Additional information on the treatment.
20.	**Treatment end date:** The calendar date on which execution of the prescription ended.
21.	**Treatment route:** The route of treatment administration e.g., oral, IV, topical, rectal, etc.
22.	**Treatment start date:** The calendar date on which execution of the prescription started.
23.	**Treatment type:** The type of prescribed treatment the case person received e.g., drugs intake, Intravenous (IV) fluids, oxygen therapy, etc.
24. **Type of drug:** The therapeutic function of a drug e.g., antimicrobial, antiviral, etc.

### Follow-up

1.	**Clinical signs and symptoms:** To specify the clinical signs and, or symptoms of the case person that were present at the time of the follow-up assessment.
2.	**Comments:** Any relevant comments on data provided on signs and symptoms of the case person at the time of the follow-up assessment. 
3.	**Complications:** To specify the types of disease complications of the case person that were present at the time of the follow-up assessment e.g., altered level of consciousness, sepsis, haemorrhagic syndrome etc.
4.	**Current body temperature:** The temperature of the case person at the time of follow-up assessment – measured in degree Celsius.
5.	**Date and time of visit:** The calendar date and time a health officer did a follow-up assessment on the case person.
6.	**Date of symptom onset:** The calendar date on which the case person developed the first sign or symptom.
7. **Disease:** The full name of the disease for which case person is under follow-up.
8.	**Export:** A feature used to export all follow-up data of the case in a .csv format.
9.	**First Symptom:** The first sign or symptom that the case person developed.
10.	**Gastrointestinal:** The gastrointestinal signs and symptoms of the case person at the time of the follow-up assessment e.g., abdominal pain, anorexia, diarrhoea, etc.
11.	**General:** The non-specific signs and symptoms of the case person at the time of the follow-up assessment e.g., fever, headache, feeling ill etc.
12.	**New visit:** A feature used to document a new follow-up assessment. 
13.	**Person available and cooperative?:** To specify whether or not on a follow-up assessment, the case person was available, available but uncooperative, or available and cooperative.
14.	**Respiratory:** The respiratory signs and symptoms of the case person at the time of the follow-up assessment e.g., cough, runny nose, rapid breathing etc.
15.	**Skin:** The dermatological signs and symptoms of the case person at the time of the follow-up assessment e.g., skin ulcers.
16.	**Source of body temperature:** The body part of the case person from which temperature was taken namely, axillary, oral, rectal, or noncontact (infrared).
17.	**Symptomatic:** To specify whether, or not the case person had signs and, or symptoms at the time of the follow-up assessment.
18.	**Visit origin:** To specify if the follow-up assessment on the case person was actively done (health official assessed the case person), or passively done (case person reported their assessment through a third-party symptom journal application).
19.	**Visit remarks:** Any relevant remarks on the follow-up assessment on the case person.

### Clinical Course

1.	**Additional relevant pre-existing conditions:** Any additional relevant information on pre-existing conditions of the case person at the time of clinical assessment.
2.	**Attending clinician:** The full name of the attending clinician.
3.	**Blood pressure (diastolic):** The diastolic blood pressure of the case person at the time of clinical assessment – measured in mmHg.
4.	**Blood pressure (systolic):** The systolic blood pressure of the case person at the time of clinical assessment – measured in mmHg.
5.	**Clinician remarks:** Any relevant remarks of the clinician on the clinical status of the case person at the time of clinical assessment.
6.	**Complications:** To specify the types of disease complications of the case person that were present at the time of clinical assessment e.g., altered level of consciousness, sepsis, haemorrhagic syndrome etc.
7.	**Current body temperature:** The temperature of the case person at the time of clinical assessment – measured in degree Celsius.
8.	**Date and time of visit:** The calendar date and time of the clinical assessment of the case person.
9.	**Glasgow Coma Scale:** The scale for assessing the Glasgow coma score (the level of consciousness of the case person) at the time of clinical assessment (minimum score =3, maximum score = 15). 
10.	**Heart rate (BPM):** The number of heart beats per minute of the case person at the time of clinical assessment.
11.	**Height (CM):** The height of the case person in centimeters at the time of clinical assessment. 
12.	**Mid-upper arm circumf.(CM):** The circumference of the mid-upper arm of the case person in centimeters at the time of clinical assessment.
13.	**Pre-existing conditions:** To specify whether, or not the case person has pre-existing diseases at the time of clinical assessment e.g., tuberculosis, diabetes mellitus, obesity, malignancy etc.
14.	**Respiratory rate (BPM):** The number of breaths per minute of the case person at the time of clinical assessment.
15.	**Source of body temperature:** The body part of the case person from which temperature was taken at the time of clinical assessment namely, axillary, oral, rectal, or noncontact (infrared).
16.	**Weight (KG):** The weight of the case person in kilograms at the time of clinical assessment. 

### Contacts

1.	**Active contact:** To display the list of only active contacts of the case.
2.	**All:** To display the list of all contacts of the case.
3.	**Apply filters:** To execute filters selections.
4.	**Bulk actions:** A feature used to execute the same action namely, edit, cancel follow-up, set to lost to follow-up, and delete to multiple contacts of the case in one process or step.
5. **Contact category:** To specify the risk category of the contact of the case namely, high risk contact, high risk medical contact, medium risk medical contact, low risk medical contact, and no risk contact.
6.	**Contact classification:** To specify whether, or not the contact is unconfirmed, confirmed, or not a contact (discarded).
7.	**Contact ID:** A system generated unique identification number of a contact.
8.	**Contact or case district:** To filter the contacts by the responsible district of the contact or the source case.
9.	**Contact region:** The reporting region of a contact of the case.
10.	**Contact status:** To specify the status of the contact of the case (active, converted to a case, or dropped).
11.	**Converted to case:** To display the list of contacts that resulted in cases.
12.	**Date of birth (Year/Month/Day):** The calendar year, month, and day of birth of the contact person of the case. 
13.	**Date of first contact:** The first calendar date of exposure of a contact person to the case person.
14.	**Date of last contact:** The last calendar date of exposure of a contact person to the case person.
15.	**Description of how contact took place:** A concise description of the circumstances leading to exposure of the contact person to the case person.
16.	**Disease:** The disease of the source case of a contact.
17.	**Dropped:** To display the list of dropped contacts. 
18.	**Export:** A feature used to export contacts of the case in .csv format.
19.	**External ID:** A unique number to link the same contacts in another system. This is used when linking contacts between SORMAS and another external application.
20.	**External token:** A unique token of a contact, used to link the contact to an external system.
21.	**First name of contact person:** The first name of the contact person of the case.
22.	**Import:** A feature used to import contacts of the case from a .csv import template.
23.	**Last name of contact person:** The last name of the contact person of the case.
24.	**Multi-day contact:** To indicate that the exposure of a contact to the case occurred over more than one day.
25.	**National ID:** A valid national identification number of the contact person of the case.
26. **New contact:** A feature used open a blank form to register a new contact of the case.
27.	**Passport Number:** A valid passport number of the contact person of the case.
28.	**Primary email:** The most reachable email address of the contact person of the case.
29.	**Primary phone number:** The most reachable telephone number of the contact person of the case.
30.	**Relationship with case:** To specify the relationship of the contact person to the case person that led to the exposure e.g., live in the same house household, work in the same environment, provided medical care for the case etc.
31. **Report date:** The calendar date on which the contact of the case was reported.
32.	**Reset filters:** To return filters to the default setting.
33.	**Responsible community:** The community within a district that is responsible to notify and manage the contact of the case. (This might not be the community of residence of the contact person as captured under “contact person” data).
34.	**Responsible contact officer:** To filter the contacts by the officer or user assigned to manage the contact.
35.	**Responsible district:** The district within a region that is responsible to notify and manage the contact of the case. (This might not be the district of residence of the contact person as captured under “contact person” data).
36.	**Responsible region:** The region within a country that is responsible to notify and manage the contact of the case. (This might not be the region of residence of the contact person as captured under “contact person” data).
37.	**Returning traveler:** To specify whether, or not a contact person of the case is a returning traveler.
38.	**Sex:** The sex of the contact person of the case.
39.	**Type of contact:** To specify the mode of exposure of a contact person to the case person e.g., face-to-face contact of at least 15 minutes, touched body fluids of source case, etc.****