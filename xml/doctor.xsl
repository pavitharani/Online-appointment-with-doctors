<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  
<xsl:template match="/"> 
 <html>
  <style>
body {
  background-color: lightgreen;
}
</style>
 <body> 
  <h1 align="center">Doctors Detail</h1> 
   <table border="3" align="center" > 
   <tr bgcolor="aqua"> 
    <th>Name</th> 
    <th>Educational Qualification</th> 
    <th>phone</th> 
   </tr> 
    <xsl:for-each select="Doctor/s"> 
   <tr bgcolor="pale-red"> 
    <td  bgcolor="pale-red"><xsl:value-of select="name"/></td> 
    <td><xsl:value-of select="qual"/></td> 
    <td><xsl:value-of select="phone"/></td> 
   </tr> 
    </xsl:for-each> 
    </table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 