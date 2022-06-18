use serde::Deserialize;
#[allow(dead_code)]
#[derive(Deserialize, Debug)]
struct PutApiResponse{
    success: bool,
    person_id: String,
    msg: Option<String>,
    data: Vec<People>,
}

#[allow(dead_code)]
#[derive( Deserialize, Debug)]
struct People {
    id: u8,
    name: String,
}
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let put_response =  client.put("http://localhost:5000/api/people/2")
        .form(&[("name", "Mambo")])
        .send()
        .await?
        .json::<PutApiResponse>()
        .await?;
    println!("{put_response:#?}");
    Ok(())
}
