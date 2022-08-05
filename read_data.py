import csv
import codecs
from tqdm import tqdm

# Run this script to transform points from data.csv into JavaScript and write them to points.js


count=0



# writing file points.js
fhand = codecs.open('js/points.js', 'w', "utf-8")
fhand.write("var addressPoints = [\n")



# opening the CSV file
with open('volcanoes.csv', mode ='r') as file:
   
  # reading the CSV file
  csvFile = csv.reader(file)
 
  # for a given point, extract longitude (lon), latittude(lat), and attributes
  for lines in tqdm(csvFile):

    
       lon=lines[0]
       lat=lines[1]

       name="'"+lines[2]+"'"
       country= "'"+lines[3]+"'"

      # setting up layer names according to "type" attribute
       popup=" `"+lines[4][0:lines[4].find('ñ')]+" `"



     
      # formatting output of  each point
       count = count + 1
       
       if count > 1 : fhand.write(",\n")
       output = "["+str(lon)+","+str(lat)+","+str(name)+","+str(country)+","+str(popup)+"]"


      # writing output to points.js
       fhand.write(output)


fhand.write("\n];\n")
       

