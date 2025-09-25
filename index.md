---
layout: home
---

# {{ site.title }}

<table>
    <thead><tr>
        <th>   </th><th> Location </th><th> City </th><th> State </th>
    </tr></thead>
    {% for row in site.data.r1index %}
    <tr>
        {% if row["ziv"] -%}
        <td><a href="https://zenius-i-vanisher.com/v5.2/arcade.php?id={{ row["ziv"] }}#summary"> {{row["code"]}} </a></td>
        {%- else -%}
        <td> {{ row["code"] }} </td>
        {%- endif %}
        <td> {{ row["store"] }} </td>
        <td> {{ row["city"] }} </td>
        <td> {{ row["state"] }} </td>
    </tr>
    {% endfor %}
</table>

Click column headers to re-sort the table, or click a shop code to view its page on Zenius-i-Vanisher.

*This community resource is not affiliated with or endorsed by Round1 Entertainment Inc.*

*To contribute to this list, please visit [the github repository](https://github.com/edm64/round1-location-index) and open an issue or pull request.*