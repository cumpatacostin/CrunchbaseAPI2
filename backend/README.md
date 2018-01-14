Organization and founder manager integrated with Crunchbase API
Components
The web application has a search box in which you can type Organizations/Founders and the results will be displayed below using the Crunchbase API in a list format from which you can choose which one of those you are looking for and save them using a MySQL database. In the menu you can pick whether you want to search or see the saved list.

API calls
GET /ORGANIZATIONS/

GET /ORGANIZATIONS/:NAME/FOUNDERS

POST /ORGANIZATIONS

PUT /ORGANIZATIONS/:NAME

GET /PERSONS/:PERMALINK/FOUNDED_COMPANIES

User Actions
Search by organization name/ founder name View the founders of the company or the companies that some person may have founded Add them to the list of companies in which you are interested See the list where you can see all the companies and their founders

*Node modules are not included in the repository.