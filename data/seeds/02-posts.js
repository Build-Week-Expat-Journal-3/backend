exports.seed = function (knex) {
  return knex("post").insert([
    {
      title: "Boats in Italy",
      img_url:
        "https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Venice, Italy",
      story: "Photo of boats on a still river in Italy.",
      user_id: 1,
    },
    {
      title: "Iguanas in Mexico!",
      img_url:
        "https://images.unsplash.com/photo-1493527581643-f0817e264564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Sayulita, Mexico",
      story: "Found these iguanas on our walk home from dinner tonight.",
      user_id: 1,
    },
    {
      title: "Parakeets in Nicaragua",
      img_url:
        "https://images.unsplash.com/photo-1490218456693-d7666a02f876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Leon Department, Nicaragua",
      story: "These three parakeets were serenading everyone passing by.",
      user_id: 1,
    },
    {
      title: "Tanzanian School Children",
      img_url:
        "https://images.unsplash.com/photo-1585660024633-321c071185ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Stone Town, Zanzibar, Tanzania",
      story:
        "Uniformed school children during their afternoon commute home in Zanzibar.",
      user_id: 2,
    },
    {
      title: "Kenyan Farmer's Market!",
      img_url:
        "https://images.unsplash.com/photo-1558907530-fe311178388a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Lamu, Kenya",
      story:
        "This market was beautiful, it was hard for us not to support every single local seller we met this day.",
      user_id: 2,
    },
    {
      title: "Japan at Night",
      img_url:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Shibuya, Japan",
      story:
        "Taken after a long day of shopping and exploring the city of Shibuya, Japan.",
      user_id: 2,
    },
    {
      title: "A Snowy Adventure",
      img_url:
        "https://images.unsplash.com/photo-1569832856136-5f42d6a3ed67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Mount Elbrus, Kabardino-Balkaria, Russia",
      story:
        "After 8 days and 14 hours of hiking, we summited Mount Elbrus, Europe's tallest peak.",
      user_id: 3,
    },
    {
      title: "Impeachment Protest in South Korea",
      img_url:
        "https://images.unsplash.com/photo-1570287893361-a756968ca6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Seol, South Korea",
      story:
        "People protesting during the impeachment of former president, Park Geun-Hye.",
      user_id: 3,
    },
    {
      title: "Climbing in Germany",
      img_url:
        "https://images.unsplash.com/photo-1570030289513-f44af3cd0944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      location: "Frankenjura, Germany",
      story:
        "We scaled quite a few walls during our short week in Germany. This one was by far our favorite.",
      user_id: 3,
    },
  ]);
};
