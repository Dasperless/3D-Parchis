#pragma checksum "C:\Users\Usuario\Documents\GitHub\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\UnirseJuego.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "79a1471ee9e3996fc83adf47b71d64f44a6e058f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_UnirseJuego), @"mvc.1.0.view", @"/Views/Home/UnirseJuego.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Usuario\Documents\GitHub\3D-Parchis\Programa\Interfaz\3DParchis\Views\_ViewImports.cshtml"
using _3DParchis;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Usuario\Documents\GitHub\3D-Parchis\Programa\Interfaz\3DParchis\Views\_ViewImports.cshtml"
using _3DParchis.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"79a1471ee9e3996fc83adf47b71d64f44a6e058f", @"/Views/Home/UnirseJuego.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0e78845849a1f0cb1ba165bd033d8d5feabfe1c3", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_UnirseJuego : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaAmarilla.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaVerde.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/centro.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaAzul.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/esquinaRoja.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", "~/js/unirseJuego.js", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\Usuario\Documents\GitHub\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\UnirseJuego.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Usuario\Documents\GitHub\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\UnirseJuego.cshtml"
  
    Layout = "_Layout";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"

<style>

    table {
        margin: auto;
        background-color: white;
        text-align: center;
    }

    td {
        width: 20px;
        height: 20px;
    }

    h1 {
        text-align: center;
        /*color: white;*/
    }

    .amarillo {
        background-color: yellow;
        text-align: center;
    }

    .verde {
        background-color: green;
        text-align: center;
    }

    .azul {
        background-color: blue;
        text-align: center;
    }

    .rojo {
        background-color: red;
        text-align: center;
    }

    #vacio {
        background-color: black;
    }

    img {
        width: 200px;
        height: 200px;
    }
</style>
<div class=""text-center"">
    <h3 class=""display-4""><b>Unirse a Juego</b></h3>
");
            WriteLiteral(@"</div>

<div class=""container"" id=""datoCreacion"">
    <h4>Agregue todos los datos:</h4>
    <div class=""row"">
        <div class=""col"">
            <label for=""niknameInput"" class=""form-label"">Nikname</label>
            <input type=""text"" class=""form-control"" placeholder=""Nikname"" aria-label=""Nikname"" id=""niknameInput"" name=""niknameInput"">
        </div>
    </div>

    <h4>Juegos activos:</h4>
    <button type=""submit"" class=""btn btn-outline-success"" id=""buscarPartidas"">
        Buscar <i class='bx bx-check bx-burst-hover bx-border-circle'></i>
    </button>
    <table class=""table table-hover"">
        <thead>
            <tr>
                <th scope=""col"">ID Partida</th>
                <th scope=""col"">Nickname del creador</th>
                <th scope=""col"">Cant Jugadores</th>
                <th scope=""col"">Jugadores en el juego</th>
                <th scope=""col"">Seleccionar</th>
            </tr>
        </thead>
        <tbody id=""tbodyJuego"">
        </tbody>
    </tab");
            WriteLiteral("le>\r\n</div>\r\n\r\n<table border=\"1px\" hidden>\r\n    <!-- 1 -->\r\n    <tr>\r\n        <td class=\"amarillo\" colspan=\"7\" rowspan=\"7\">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "79a1471ee9e3996fc83adf47b71d64f44a6e058f7938", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("</td>\r\n        <td colspan=\"2\">1</td>\r\n        <td colspan=\"2\">68</td>\r\n        <td colspan=\"2\">67</td>\r\n        <td class=\"verde\" colspan=\"7\" rowspan=\"7\">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "79a1471ee9e3996fc83adf47b71d64f44a6e058f9139", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"</td>
    </tr>
    <!-- 2 -->
    <tr>
        <td colspan=""2"">2</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">66</td>
    </tr>
    <!-- 3 -->
    <tr>
        <td colspan=""2"">3</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">65</td>
    </tr>
    <!-- 4 -->
    <tr>
        <td colspan=""2"">4</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">64</td>
    </tr>
    <!-- 5 -->
    <tr>
        <td class=""amarillo"" colspan=""2"">5</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">63</td>
    </tr>
    <!-- 6 -->
    <tr>
        <td colspan=""2"">6</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">62</td>
    </tr>
    <!-- 7 -->
    <tr>
        <td colspan=""2"">7</td>
        <td class=""amarillo"" colspan=""2"">-</td>
        <td colspan=""2"">61</td>
    </tr>
    <!-- 8 -->
    <!-- Primera línea justo debajo de los grandes -->
    <tr>
 ");
            WriteLiteral(@"       <td rowspan=""2"">16</td>
        <td rowspan=""2"">15</td>
        <td rowspan=""2"">14</td>
        <td rowspan=""2"">13</td>
        <td rowspan=""2"">12</td>
        <td rowspan=""2"">11</td>
        <td rowspan=""2"">10</td>
        <td id=""vacio""></td>
        <td>8</td>
        <td>-</td>
        <td>-</td>
        <td>60</td>
        <td id=""vacio""></td>
        <td rowspan=""2"">58</td>
        <td rowspan=""2"">57</td>
        <td class=""verde"" rowspan=""2"">56</td>
        <td rowspan=""2"">55</td>
        <td rowspan=""2"">54</td>
        <td rowspan=""2"">53</td>
        <td rowspan=""2"">52</td>
    </tr>
    <!-- 9 -->
    <tr>
        <td>9</td>
        <td colspan=""4"" rowspan=""4"">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "79a1471ee9e3996fc83adf47b71d64f44a6e058f12019", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"</td>
        <td>59</td>
    </tr>
    <!-- 10 -->
    <tr>
        <td rowspan=""2"">17</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td class=""azul"" rowspan=""2"">|</td>
        <td>|</td>
        <td>|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td class=""verde"" rowspan=""2"">|</td>
        <td rowspan=""2"">51</td>
    </tr>
    <!-- 11 -->
    <tr>
        <td>|</td>
        <td>|</td>
    </tr>
    <!-- 12 -->
    <tr>
        <td rowspan=""2"">18</td>
        <td rowspan=""2"">19</td>
        <td rowspan=""2"">20</td>
        <td rowspan=""2"">21</td>
        <td class=""azul"" rowspan=""2"">22</td>
        <td ");
            WriteLiteral(@"rowspan=""2"">23</td>
        <td rowspan=""2"">24</td>
        <td>25</td>
        <td>43</td>
        <td rowspan=""2"">44</td>
        <td rowspan=""2"">45</td>
        <td rowspan=""2"">46</td>
        <td rowspan=""2"">47</td>
        <td rowspan=""2"">48</td>
        <td rowspan=""2"">49</td>
        <td rowspan=""2"">50</td>
    </tr>
    <!-- 13 -->
    <tr>
        <td id=""vacio""></td>
        <td>26</td>
        <td>-</td>
        <td>-</td>
        <td>42</td>
        <td id=""vacio""></td>
    </tr>
    <!-- 14 -->
    <tr>
        <td class=""azul"" colspan=""7"" rowspan=""7"">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "79a1471ee9e3996fc83adf47b71d64f44a6e058f14789", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("</td>\r\n        <td colspan=\"2\">27</td>\r\n        <td class=\"rojo\" colspan=\"2\">-</td>\r\n        <td colspan=\"2\">41</td>\r\n        <td class=\"rojo\" colspan=\"7\" rowspan=\"7\">");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "79a1471ee9e3996fc83adf47b71d64f44a6e058f16005", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"</td>
    </tr>
    <!-- 15 -->
    <tr>
        <td colspan=""2"">28</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">40</td>
    </tr>
    <!-- 16 -->
    <tr>
        <td colspan=""2"">29</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td class=""rojo"" colspan=""2"">39</td>
    </tr>
    <!-- 17 -->
    <tr>
        <td colspan=""2"">30</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">38</td>
    </tr>
    <!-- 18 -->
    <tr>
        <td colspan=""2"">31</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">37</td>
    </tr>
    <!-- 19 -->
    <tr>
        <td colspan=""2"">32</td>
        <td class=""rojo"" colspan=""2"">-</td>
        <td colspan=""2"">36</td>
    </tr>
    <!-- 20 -->
    <tr>
        <td colspan=""2"">33</td>
        <td colspan=""2"">34</td>
        <td colspan=""2"">35</td>
    </tr>

</table>
");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "79a1471ee9e3996fc83adf47b71d64f44a6e058f18006", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.ScriptTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.Src = (string)__tagHelperAttribute_5.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_5);
#nullable restore
#line 262 "C:\Users\Usuario\Documents\GitHub\3D-Parchis\Programa\Interfaz\3DParchis\Views\Home\UnirseJuego.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion = true;

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-append-version", __Microsoft_AspNetCore_Mvc_TagHelpers_ScriptTagHelper.AppendVersion, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
