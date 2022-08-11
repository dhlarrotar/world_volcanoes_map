import csv
import codecs
from tqdm import tqdm

# Run this script to transform points from volcanoes.csv into Leaflet markers and write them to points.js



# writing file points.js
fhand = codecs.open('js/points.js', 'w', 'utf-8')



# opening the CSV file
with open('volcanoes.csv', mode ='r',) as file:
  print(file)
   
  # reading the CSV file
  csvFile = csv.reader(file)
 
  # for a given point, extract longitude (lon), latittude(lat), and attributes
  for lines in tqdm(csvFile):

    
       lon=lines[0]
       lat=lines[1]

       name="`"+lines[2]+"`"
       country= "`"+lines[3]+"`"

      # setting up layer names according to "type" attribute
       popup=" `"+lines[4][0:lines[4].find('ñ')]+" `"



     
      # formatting output of  each point
       output = "var marker = L.marker(new L.LatLng("+str(lat)+","+str(lon)+")).addTo(parentGroup).bindPopup("+str(popup)+").bindTooltip("+str(name)+",{permanent:true});\n"

      # writing output to points.js
       fhand.write(output)


fhand.write("parentGroup.addTo(map);")