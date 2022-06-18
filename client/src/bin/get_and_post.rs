use serde::Deserialize;
#[allow(dead_code)]
#[derive(Deserialize, Debug)]
struct ApiResponse {
    success: bool,
    data: Vec<People>,
}

#[allow(dead_code)]
#[derive( Deserialize, Debug)]
struct People {
    id: u8,
    name: String,
}
#[allow(dead_code)]
#[derive(Deserialize, Debug)]
struct PostApiResponse{
    success: bool,
    person: Option<String>,
    msg: Option<String>
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let resp = reqwest::get("http://127.0.0.1:5000/api/people")
        .await?
        .json::<ApiResponse>()
        .await?;
    println!("{resp:#?}");
    let client = reqwest::Client::new();
    let res = client.post("http://localhost:5000/add")
        .form(&[("name", "Violet 1")])
        .send()
        .await?
        .json::<PostApiResponse>()
        .await?;
    println!("{res:#?}");   
    Ok(())
}
